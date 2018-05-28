import {shallowMount} from '@vue/test-utils'
import {createRenderer} from 'vue-server-renderer'
import Intro from '@/components/Intro'

describe('Intro.vue', () => {
  it('should load the correct props', () => {
    const wrapper = shallowMount(Intro, {
      stubs: ['router-link'],
      propsData: {
        title: 'test title'
      }
    })

    expect(wrapper.contains('h1')).toBeTruthy()
    expect(wrapper.props().title).toBe('test title')
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
