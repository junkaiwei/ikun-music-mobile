import { memo } from 'react'

import Section from '../../components/Section'
import IsSavePlayTime from './IsSavePlayTime'
import IsPlayHighQuality from './IsPlayHighQuality'
import IsHandleAudioFocus from './IsHandleAudioFocus'
import IsEnableAudioOffload from './IsEnableAudioOffload'
import IsAutoCleanPlayedList from './IsAutoCleanPlayedList'
import IsShowBluetoothLyric from './IsShowBluetoothLyric'
import IsShowNotificationImage from './IsShowNotificationImage'
import IsShowLyricTranslation from './IsShowLyricTranslation'
import IsShowLyricRoma from './IsShowLyricRoma'
import SelectPlayQuality from './SelectPlayQuality'
import IsS2T from './IsS2T'
import MaxCache from './MaxCache'
import { useI18n } from '@/lang'


export default memo(() => {
  const t = useI18n()

  return (
    <Section title={t('setting_player')}>
      <IsSavePlayTime />
      <IsAutoCleanPlayedList />
      {/* <IsPlayHighQuality /> */}
      <IsHandleAudioFocus />
      <IsEnableAudioOffload />
      <IsShowBluetoothLyric />
      <IsShowNotificationImage />
      <IsShowLyricTranslation />
      <IsShowLyricRoma />
      <IsS2T />
      <SelectPlayQuality />
      <MaxCache />
    </Section>
  )
})
