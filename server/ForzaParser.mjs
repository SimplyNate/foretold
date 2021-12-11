/**
 *
 * @param {Buffer} buffer
 * @param {number} start
 * @param {number} length
 * @returns {number}
 */
export function getSingle(buffer, start, length) {
    const slice = buffer.slice(start, start + length);
    return slice.readFloatLE();
}

/**
 *
 * @param {Buffer} buffer
 * @param {number} start
 * @param {number} length
 * @returns {number}
 */
export function getUInt32(buffer, start, length) {
    const slice = buffer.slice(start, start + length);
    return slice.readUInt32LE();
}

/**
 *
 * @param {Buffer} buffer
 * @param {number} start
 * @param {number} length
 * @returns {number}
 */
export function getUInt16(buffer, start, length) {
    const slice = buffer.slice(start, start + length);
    return slice.readUInt16LE();
}

/**
 *
 * @param {Buffer} buffer
 * @param {number} start
 * @param {number} length
 * @returns {number}
 */
export function getUInt8(buffer, start, length) {
    const slice = buffer.slice(start, start + length);
    return slice.readUInt8();
}

/**
 *
 * @param {Buffer} buffer
 * @param {number} start
 * @param {number} length
 * @returns {number}
 */
export function getInt8(buffer, start, length) {
    const slice = buffer.slice(start, start + length);
    return slice.readInt8();
}

export function forzaParser(buffer) {
    const forzaPacket = {};
    forzaPacket.isRaceOn = getSingle(buffer, 0, 4) > 0;
    forzaPacket.timestamp = getUInt32(buffer, 4, 4);
    forzaPacket.engineMaxRpm = getSingle(buffer,8, 4);
    forzaPacket.engineIdleRpm = getSingle(buffer,12, 4);
    forzaPacket.currentEngineRpm = getSingle(buffer,16, 4);
    forzaPacket.accelerationX = getSingle(buffer,20, 4);
    forzaPacket.accelerationY = getSingle(buffer,24, 4);
    forzaPacket.accelerationZ = getSingle(buffer,28, 4);
    forzaPacket.velocityX = getSingle(buffer,32, 4);
    forzaPacket.velocityY = getSingle(buffer,36, 4);
    forzaPacket.velocityZ = getSingle(buffer, 40, 4);
    forzaPacket.angularVelocityX = getSingle(buffer, 44, 4);
    forzaPacket.angularVelocityY = getSingle(buffer, 48, 4);
    forzaPacket.angularVelocityZ = getSingle(buffer, 52, 4);
    forzaPacket.yaw = getSingle(buffer, 56, 4);
    forzaPacket.pitch = getSingle(buffer, 60, 4);
    forzaPacket.roll = getSingle(buffer, 64, 4);
    forzaPacket.normSuspensionTravelFl = getSingle(buffer, 68, 4);
    forzaPacket.normSuspensionTravelFr = getSingle(buffer, 72, 4);
    forzaPacket.normSuspensionTravelRl = getSingle(buffer, 76, 4);
    forzaPacket.normSuspensionTravelRr = getSingle(buffer, 80, 4);
    forzaPacket.tireSlipRatioFl = getSingle(buffer, 84, 4);
    forzaPacket.tireSlipRatioFr = getSingle(buffer, 88, 4);
    forzaPacket.tireSlipRatioRl = getSingle(buffer, 92, 4);
    forzaPacket.tireSlipRatioRr = getSingle(buffer, 96, 4);
    forzaPacket.wheelRotationSpeedFl = getSingle(buffer, 100, 4);
    forzaPacket.wheelRotationSpeedFr = getSingle(buffer, 104, 4);
    forzaPacket.wheelRotationSpeedRl = getSingle(buffer, 108, 4);
    forzaPacket.wheelRotationSpeedRr = getSingle(buffer, 112, 4);
    forzaPacket.wheelOnRumbleStripFl = getSingle(buffer, 116, 4);
    forzaPacket.wheelOnRumbleStripFr = getSingle(buffer, 120, 4);
    forzaPacket.wheelOnRumbleStripRl = getSingle(buffer, 124, 4);
    forzaPacket.wheelOnRumbleStripRr = getSingle(buffer, 128, 4);
    forzaPacket.wheelInPuddleFl = getSingle(buffer, 132, 4);
    forzaPacket.wheelInPuddleFr = getSingle(buffer, 136, 4);
    forzaPacket.wheelInPuddleRl = getSingle(buffer, 140, 4);
    forzaPacket.wheelInPuddleRr = getSingle(buffer, 144, 4);
    forzaPacket.surfaceRumbleFl = getSingle(buffer, 148, 4);
    forzaPacket.surfaceRumbleFr = getSingle(buffer, 152, 4);
    forzaPacket.surfaceRumbleRl = getSingle(buffer, 156, 4);
    forzaPacket.surfaceRumbleRr = getSingle(buffer, 160, 4);
    forzaPacket.tireSlipAngleFl = getSingle(buffer, 164, 4);
    forzaPacket.tireSlipAngleFr = getSingle(buffer, 168, 4);
    forzaPacket.tireSlipAngleRl = getSingle(buffer, 172, 4);
    forzaPacket.tireSlipAngleRr = getSingle(buffer, 176, 4);
    forzaPacket.tireCombinedSlipFl = getSingle(buffer, 180, 4);
    forzaPacket.tireCombinedSlipFr = getSingle(buffer, 184, 4);
    forzaPacket.tireCombinedSlipRl = getSingle(buffer, 188, 4);
    forzaPacket.tireCombinedSlipRr = getSingle(buffer, 192, 4);
    forzaPacket.suspensionTravelMetersFl = getSingle(buffer, 196, 4);
    forzaPacket.suspensionTravelMetersFr = getSingle(buffer, 200, 4);
    forzaPacket.suspensionTravelMetersRl = getSingle(buffer, 204, 4);
    forzaPacket.suspensionTravelMetersRr = getSingle(buffer, 208, 4);
    forzaPacket.carOrdinal = getUInt8(buffer, 212, 4);
    forzaPacket.carClass = getUInt8(buffer, 216, 4);
    forzaPacket.carPerformanceIndex = getUInt8(buffer, 220, 4);
    forzaPacket.driveTrain = getUInt8(buffer, 224, 4);
    forzaPacket.numCylinders = getUInt8(buffer, 228, 4);

    forzaPacket.unknown1 = getUInt8(buffer, 232, 4);
    forzaPacket.unknown2 = getUInt8(buffer, 236, 4);
    forzaPacket.unknown3 = getUInt8(buffer, 240, 4);

    forzaPacket.positionX = getSingle(buffer, 244, 4);
    forzaPacket.positionY = getSingle(buffer, 248, 4);
    forzaPacket.positionZ = getSingle(buffer, 252, 4);
    forzaPacket.speed = getSingle(buffer, 256, 4); // * 2.2267;
    forzaPacket.power = getSingle(buffer, 260, 4);
    forzaPacket.torque = getSingle(buffer, 264, 4);
    forzaPacket.tireTempFl = getSingle(buffer, 268, 4);
    forzaPacket.tireTempFr = getSingle(buffer, 272, 4);
    forzaPacket.tireTempRl = getSingle(buffer, 276, 4);
    forzaPacket.tireTempRr = getSingle(buffer, 280, 4);
    forzaPacket.boost = getSingle(buffer, 284, 4);
    forzaPacket.fuel = getSingle(buffer, 288, 4);
    forzaPacket.distance = getSingle(buffer, 292, 4);
    forzaPacket.bestLapTime = getSingle(buffer, 296, 4);
    forzaPacket.lastLapTime = getSingle(buffer, 300, 4);
    forzaPacket.currentLapTime = getSingle(buffer, 304, 4);
    forzaPacket.currentRaceTime = getSingle(buffer, 308, 4);
    forzaPacket.lap = getUInt16(buffer, 312, 2);
    forzaPacket.racePosition = getUInt8(buffer, 314, 1);
    forzaPacket.accelerator = getUInt8(buffer, 315, 1);
    forzaPacket.brake = getUInt8(buffer, 316, 1);
    forzaPacket.clutch = getUInt8(buffer, 317, 1);
    forzaPacket.handbrake = getUInt8(buffer, 318, 1);
    forzaPacket.gear = getUInt8(buffer, 319, 1);
    forzaPacket.steer = getInt8(buffer, 320, 1);
    forzaPacket.normalDrivingLine = getUInt8(buffer, 321, 1);
    forzaPacket.normalAiBrakeDifference = getUInt8(buffer, 322, 1);

    forzaPacket.unknown4 = getUInt8(buffer, 323, 1);
    return forzaPacket;
}
