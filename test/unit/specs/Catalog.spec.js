import {shallowMount} from '@vue/test-utils'
import Catalog from '@/components/Catalog'



jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: [ { title: "Test", slug: "test" } ]}))
}))

import axios from 'axios'

describe('Catalog.vue', () => {

  it('should load templates props', () => {
    const wrapper = shallowMount(Catalog, {
      stubs: ['router-link']
    })

    expect(axios.get).toBeCalledWith('/api/templates')
    console.log(wrapper.vm.templates)
  })

  it('should match snapshot', () => {
    const wrapper = shallowMount(Catalog, {
      stubs: ['router-link']
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})


