import { memo } from 'react'
import { View, TouchableOpacity } from 'react-native'

import Section from '../components/Section'
// import Button from './components/Button'

import { createStyle, openUrl } from '@/utils/tools'
// import { showPactModal } from '@/navigation'
import { useTheme } from '@/store/theme/hook'
import { useI18n } from '@/lang'
import Text from '@/components/common/Text'
import { showPactModal } from '@/core/common'

const tgGroupUrl = 'https://t.me/ikunshare_qun'

export default memo(() => {
  const theme = useTheme()
  const t = useI18n()
  const openHomePage = () => {
    void openUrl('https://github.com/ikunshare/lx-music-mobile-mod#readme')
  }
  const openNetdiskPage = () => {
    void openUrl('https://www.lanzoui.com/s/LXMusic')
  }
  const openFAQPage = () => {
    void openUrl('https://lyswhut.github.io/lx-music-doc/mobile/faq')
  }

  const goToTGGroup = () => {
    openUrl(tgGroupUrl).catch(() => {
      void openUrl(tgGroupUrl)
    })
  }

  const textLinkStyle = {
    ...styles.text,
    textDecorationLine: 'underline',
    color: theme['c-primary-font'],
    // fontSize: 14,
  } as const


  return (
    <Section title={t('setting_about')}>
      <View style={styles.part}>
        <Text style={styles.text} >本软件完全免费，代码已开源，开源地址：</Text>
        <TouchableOpacity onPress={openHomePage}>
          <Text style={textLinkStyle}>https://github.com/ikunshare/lx-music-mobile-mod</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.part}>
        <Text style={styles.text} >最新版网盘下载地址：</Text>
        <TouchableOpacity onPress={openNetdiskPage}>
          <Text style={textLinkStyle}>网盘地址（密码：LXMusicMod）</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.part}>
        <Text style={styles.text} >软件的常见问题可转至：</Text>
        <TouchableOpacity onPress={openFAQPage}>
          <Text style={textLinkStyle}>常见问题</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}><Text style={styles.boldText}>本软件没有客服</Text>，但我们整理了一些常见的使用问题，<Text style={styles.boldText} >仔细 仔细 仔细 </Text>地阅读常见问题后，</Text>
        <Text style={styles.text}>仍有问题可加Telegaram群组 </Text>
        <TouchableOpacity onPress={goToTGGroup}><Text style={textLinkStyle}>849514974</Text></TouchableOpacity>
        <Text style={styles.text}> 反馈。</Text>
        <Text style={styles.text}>注意：<Text style={styles.boldText}>为了群主+管理的寿命，入群先看群公告</Text></Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>目前本项目的原始发布地址只有<Text style={styles.boldText}>GitHub</Text>及<Text style={styles.boldText}>蓝奏网盘</Text>，其他渠道均为第三方转载发布，可信度请自行鉴别。</Text>
        <Text style={styles.text}>本项目无微信公众号之类的官方账号，也未在小米、华为、vivo等应用商店发布同名应用，谨防被骗。</Text>
        <Text style={styles.text}>若你使用过程中遇到<Text style={styles.boldText}>广告</Text>或者<Text style={styles.boldText}>引流</Text>（如需要加群、关注公众号之类才能使用或者升级）的信息，则表明你当前运行的软件是第三方修改版。</Text>
        <Text style={styles.text}>若在升级新版本时提示<Text style={styles.boldText}>签名不一致</Text>，则表明你手机上的旧版本或者将要安装的新版本中有一方是第三方修改版。</Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>由于软件开发的初衷仅是为了对新技术的学习与研究，因此软件直至停止维护都将会一直保持纯净。</Text>
      </View>
    </Section>
  )
})

const styles = createStyle({
  part: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 14,
    textAlignVertical: 'bottom',
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
  },
  throughText: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    textAlignVertical: 'bottom',
  },
  btn: {
    flexDirection: 'row',
  },
})
