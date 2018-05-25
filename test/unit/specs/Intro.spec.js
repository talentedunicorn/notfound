import {shallowMount} from '@vue/test-utils'
import {createRenderer} from 'vue-server-renderer'
import Intro from '@/components/Intro'

const data = {
  title: 'testTitle',
  subtitle: 'testSubtitle',
  buttonLabel: 'Get started'
}

describe('Intro.vue', () => {
  it('should load the correct props', () => {
    const wrapper = shallowMount(Intro, {
      propsData: data
    })

    console.log(wrapper.find('h1'))
    expect(wrapper.find('h1').toHaveLength(1))
  })

  it('should match snapshot', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(Intro)

    renderer.toString(wrapper.vm, (err, str) => {
      if(err) throw new Error(err)

      expect(str).toMatchSnapshot()
    })
  })
})
