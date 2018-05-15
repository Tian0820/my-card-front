import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import HelloWorld from '@/components/cover/Cover.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallow(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
