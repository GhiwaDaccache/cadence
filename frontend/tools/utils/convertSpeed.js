// Speed conversion from m/s to km/min

export const convertSpeed = (speed) => { 
    const new_speed = speed * 0.06
    return new_speed;
}

// Pcae conversion from km/min to min/km
export const convertToPace = (speed) =>{
    const pace = 1 / speed
    return pace;
}