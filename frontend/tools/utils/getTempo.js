export const getBpmRangeForPace = (pace) => {
    switch (pace) {
        case pace >= 4 && pace < 5:
            return [150, 180]
        case pace >= 5 && pace < 6:
            return [125, 150]
        case pace >= 6 && pace < 7:
            return [120, 140]
        case pace >= 7 && pace < 8:
            return [110, 130]
        case pace >= 8 && pace < 9:
            return [100, 120]
        case pace >= 9 && pace < 10:
            return [90, 110]
        case pace >= 10 && pace < 11:
            return [80, 100]
        case pace >= 11 && pace < 12:
            return [70, 90]
        case pace >= 12 && pace < 13:
            return [60, 80]
        case pace >= 13 && pace < 14:
            return [55, 75]
        case pace >= 14 && pace <= 15:
            return [50, 70]
        default:
            return null
    }
}