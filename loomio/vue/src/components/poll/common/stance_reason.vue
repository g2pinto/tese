<script lang="coffee">
export default
  props:
    poll: Object
    stance: Object
    prompt: String
  computed:
    label: ->
      if @poll.config().has_options
        'poll_common.reason'
      else
        'poll_common.response'

    maxLength: ->
      if @poll.limitReasonLength
        500
      else
        undefined
</script>

<template lang="pug">
.poll-common-stance-reason
  lmo-textarea.poll-common-vote-form__reason(
    :focus-id="'poll-'+poll.id"
    v-if="poll.stanceReasonRequired != 'disabled'"
    :model='stance'
    field="reason"
    :label="$t(label)"
    :placeholder="prompt || poll.reasonPrompt || $t('poll_common.reason_placeholder')"
    :max-length='maxLength'
  )
  validation-errors(:subject="stance" field="reason")

</template>
