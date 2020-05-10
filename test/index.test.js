import { get } from '../src/components/commands'

describe('#Commands', () => {
  describe('get()', () => {
    it('should return welcome message when send !hello', () => {
      expect(commands.get())
    })
  })
})
