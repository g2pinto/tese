<script lang="coffee">
import AppConfig from '@/shared/services/app_config'

export default
  props:
    stance: Object

  computed:
    poll: -> @stance.poll()
    variableScore: -> @poll.hasVariableScore()
    pollType: -> @poll.pollType
    datesAsOptions: -> @poll.datesAsOptions()
    choices: -> @stance.sortedChoices()

  methods:
    emitClick: -> @$emit('click')

    colorFor: (score) ->
      switch score
        when 2 then AppConfig.pollColors.proposal[0]
        when 1 then AppConfig.pollColors.proposal[1]
        when 0 then AppConfig.pollColors.proposal[2]

</script>

<template lang="pug">
.poll-common-stance-choices.pb-2.pt-2(v-if="poll.pollType != 'question' && !poll.hasOptionIcon()")
  span.caption(v-if='stance.castAt && stance.totalScore() == 0' v-t="'poll_common_votes_panel.none_of_the_above'" )
  template(v-else)
    template(v-if="!datesAsOptions")
      .poll-common-stance-choice.text-truncate(
        v-for="choice in choices"
        v-if="choice.score > 0 || pollType == 'score'"
        :key="choice.id"
        :class="'poll-common-stance-choice--' + pollType")
        v-icon(small :color="choice.pollOption.color" v-if="!variableScore") mdi-check-circle
        span(:style="{color: choice.pollOption.color}" v-if="variableScore") {{choice.rank || choice.score}}
        span.ml-2.text--secondary
          | {{ choice.pollOption.optionName() }}
</template>
<style lang="sass">
.poll-common-stance-choices
  overflow: hidden

</style>

