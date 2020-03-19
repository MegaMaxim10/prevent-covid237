import * as chai from 'chai';
import * as OtherActionsTypes from '@/store/OtherActionsTypes';
import {actions,  mutations, getters} from '@/store/store';
import sinonChai from 'sinon-chai';
import { RootState, buildStore } from '@/store/store';
import { Commit } from 'vuex';

chai.use(sinonChai);
const expect = chai.expect;

describe('GeneralStore', () => {

  it('MU_TOOGLE_NAV_DRAWER', async () => {
    const rootstate: RootState = {} as any;
    rootstate.navigation_drawer = false;
    const mutation = mutations[OtherActionsTypes.MU_TOOGLE_NAV_DRAWER] as any;
    mutation(rootstate);
    // tslint:disable-next-line:no-unused-expression
    expect(rootstate.navigation_drawer, 'check that MU_TOOGLE_NAV_DRAWER return true').to.be.true;
  });
});
