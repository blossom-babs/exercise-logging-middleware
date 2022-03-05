import { logger } from '../../src/controller/logger';

describe('logger function', () => {
  it('logs url to console', () => {
    expect(logger).not.toBeFalsy();
    expect(logger.length).toBeGreaterThan(1);
  });
});
