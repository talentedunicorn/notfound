import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/Loading'

describe('Loading.vue', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(Loading)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
