import {shallowMount} from '@vue/test-utils'
import Catalog from '@/components/Catalog'

describe('Catalog.vue', () => {
  it('should have correct props', () => {
    const wrapper = shallowMount(Catalog, {
      stubs: ['router-link']
    })

    expect(wrapper.props()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const wrapper = shallowMount(Catalog, {
      stubs: ['router-link']
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})


