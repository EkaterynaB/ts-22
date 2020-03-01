import HelloDecorator from '@/components/HelloDecorator.vue';
import { shallowMount } from '@vue/test-utils';

describe('Hello.vue', () => {
  it('should render', () => {
    const name = 'World';
    const initialEnthusiasm = 5;
    let vm: any;

    const wrapper = shallowMount(HelloDecorator, {
      propsData: {
        name, initialEnthusiasm
      }
    });
    vm = wrapper.vm;
    vm.decrement();
    console.log({ wr: vm.enthusiasm });
    expect(wrapper.find('.greeting').text()).toBe('Hello World!!!!!')
  })
});