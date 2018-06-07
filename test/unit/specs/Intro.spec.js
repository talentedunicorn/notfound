import {shallowMount} from '@vue/test-utils'
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
    const wrapper = shallowMount(Intro, {
      stubs: ['router-link']
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
