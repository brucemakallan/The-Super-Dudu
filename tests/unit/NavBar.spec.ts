import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';
import { mockState, mockGetters, mockMutations, mockActions } from '../mocks';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: mockState,
  getters: mockGetters,
  mutations: mockMutations,
  actions: mockActions,
});

let wrapper: any;

describe('NavBar.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavBar, {
      store,
      localVue,
    });
  });

  it('renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
