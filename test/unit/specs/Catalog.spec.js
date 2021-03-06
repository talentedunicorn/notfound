import {shallowMount} from '@vue/test-utils'
import {createRenderer} from 'vue-server-renderer'
import Catalog from '@/components/Catalog'

describe('Catalog.vue', () => {
  it('should have correct props', () => {
    const wrapper = shallowMount(Catalog, {
      stubs: ['router-link']
    })

    expect(wrapper.props()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(Catalog)

    renderer.toString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    }) 
  })
})


