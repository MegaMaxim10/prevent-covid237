import * as chai from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import RealbestandBase from '@/components/RealbestandBase.vue';
import sinonChai from 'sinon-chai';
import * as types from '@/store/ActionsTypes';
import { buildStore, RootState } from '@/store/store';
chai.use(sinonChai);
const expect = chai.expect;


describe('RealbestandBase', () => {
  let wrapper: any;
  let store: any;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = buildStore({ supplierData: {} as any}, false);

    wrapper = shallowMount(RealbestandBase, {
      store,
      localVue,
      mocks: {}
    });
  });
});

