class StanceService

  def self.create(stance:, actor:)
    actor.ability.authorize!(:vote_in, stance.poll)

    stance.participant = actor
    stance.cast_at ||= Time.zone.now
    stance.revoked_at = nil
    stance.revoker_id = nil
    stance.save!
    stance.poll.update_counts!


    puts ""
    puts ""
    puts ""
    puts ""
    puts "trying to find stance choice name"
    puts ""
    puts ""
    puts ""
    puts ""
    puts ""
    puts "create stance"
    puts stance.poll.title.dup
    puts stance.poll.poll_options.length
    puts "poll id _ stance poll id"
    puts stance.poll.id
    puts stance.poll_id
    #puts option
    #puts poll.poll_option_names[0]
    #puts poll.poll_option_names[1]
    #puts poll.poll_option_names[2]
    puts `/home/gustavo/Documents/tese/loomio/VotePollScript.sh '#{stance.poll.id}' '#{Digest::SHA256.hexdigest stance.stance_choices[0].poll_option.name}'`
    puts ""
    puts ""
    puts ""

    event = Events::StanceCreated.publish!(stance)
    event
  end

  def self.uncast(stance:, actor:)
    actor.ability.authorize!(:uncast, stance)

    new_stance = stance.build_replacement
    Stance.transaction do
      stance.update_columns(latest: false)
      new_stance.save!
    end

    new_stance.poll.update_counts!

    puts ""
    puts ""
    puts ""
    idChain = stance.poll.title.dup
    idChain.concat(stance.poll.poll_option_names[0], stance.poll.poll_option_names[1])
    #puts poll.poll_option_names[0]
    #puts poll.poll_option_names[1]
    #puts poll.poll_option_names[2]
    #puts `/home/gustavo/Documents/tese/loomio/updatePollScript.sh '#{stance.poll.id}' '#{Digest::SHA256.hexdigest stance.poll.title}' '#{Digest::SHA256.hexdigest stance.poll.poll_option_names[0]}' '#{Digest::SHA256.hexdigest stance.poll.poll_option_names[1]}' '#{stance.poll.poll_options[0].total_score}' '#{stance.poll.poll_options[1].total_score}'`
    puts ""
    puts ""
    puts ""
  end

  def self.update(stance:, actor:, params: )
    actor.ability.authorize!(:update, stance)
    is_update = !!stance.cast_at

    new_stance = stance.build_replacement
    new_stance.assign_attributes_and_files(params)

    if is_update && stance.option_scores != new_stance.build_option_scores
      # they've changed their position! create a new stance, so that discussion threads make sense

      new_stance.cast_at = Time.zone.now

      Stance.transaction do
        stance.update_columns(latest: false)
        new_stance.save!
      end

      new_stance.poll.update_counts!
      MessageChannelService.publish_models([stance], group_id: stance.poll.group_id)
      Events::StanceCreated.publish!(new_stance)
    else
      
      stance.stance_choices = []
      stance.assign_attributes_and_files(params)
      stance.cast_at ||= Time.zone.now
      stance.revoked_at = nil
      stance.revoker_id = nil
      stance.save!
      stance.poll.update_counts!

      puts ""
      puts ""
      puts ""
      puts "trying to find stance choice name"
      ##puts stance.choice()
      puts stance.stance_choices
      puts stance.stance_choices[0]
      #puts poll.poll_option_names[0]
      #puts poll.poll_option_names[1]
      #puts poll.poll_option_names[2]
      #puts `/home/gustavo/Documents/tese/loomio/VotePollScript.sh '#{stance.poll.id}' '#{Digest::SHA256.hexdigest stance.stance_choices[0].poll_option.name}'`
      puts ""
      puts ""
      puts ""

      if is_update
        Events::StanceUpdated.publish!(stance)
      else
        Events::StanceCreated.publish!(stance)
      end
    end
  end

  def self.redeem(stance:, actor:)
    return if Stance.where(participant_id: actor.id, poll_id: stance.poll_id, latest: true).exists?
    return unless Stance.redeemable_by(actor).where(id: stance.id).exists?
    stance.update(participant: actor, accepted_at: Time.zone.now)
  end

  # def self.destroy(stance:, actor:)
  #   actor.ability.authorize! :destroy, stance
  #   stance.destroy
  #   EventBus.broadcast 'stance_destroy', stance, actor
  # end
end
