import { IsAdminGuard } from './is-admin-guard';

describe('IsAdminGuard', () => {
  it('should create an instance', () => {
    expect(new IsAdminGuard()).toBeTruthy();
  });
});
