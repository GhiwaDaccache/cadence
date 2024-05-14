// Pcae conversion from km/min to min/km

export const convertToPace = (speed) => { 
    const new_speed = speed * 0.06 
    const pace = 1 / new_speed
    return pace
}

