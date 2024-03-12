import { formatDigitalTime } from "../formatter";

describe("formatter", () => {
  describe("formatDigitalTime", () => {
    it("should formatter with correctly fields", () => {
      expect(formatDigitalTime(0)).toEqual("00:00");
      expect(formatDigitalTime(60)).toEqual("01:00");
      expect(formatDigitalTime(55)).toEqual("00:55");
      expect(formatDigitalTime(3600)).toEqual("01:00:00");
    });

    it("should display hours only seconds is bigger than 3600", () => {
      expect(formatDigitalTime(3599)).toEqual("59:59");
      expect(formatDigitalTime(3600)).toEqual("01:00:00");
    });
  });
});
