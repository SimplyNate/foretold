function sliceBuffer(buffer, start, offset) {
    return Number((buffer.slice(start, start + offset)).toString('utf-8'));
}

export function forzaParser(buffer) {
    const forzaPacket = {};
    forzaPacket.isRaceOn = sliceBuffer(buffer, 0, 4) > 0;
    forzaPacket.timestamp = sliceBuffer(buffer, 4, 4);
    forzaPacket.engineMaxRpm = sliceBuffer(buffer,8, 4);
    forzaPacket.engineIdleRpm = sliceBuffer(buffer,12, 4);
    forzaPacket.currentEngineRpm = sliceBuffer(buffer,16, 4);
    forzaPacket.accelerationX = sliceBuffer(buffer,20, 4);
    forzaPacket.accelerationY = sliceBuffer(buffer,24, 4);
    forzaPacket.accelerationZ = sliceBuffer(buffer,28, 4);
    forzaPacket.velocityX = sliceBuffer(buffer,32, 4);
    forzaPacket.velocityY = sliceBuffer(buffer,36, 4);
    forzaPacket.velocityZ = sliceBuffer(buffer, 40, 4);
    forzaPacket.angularVelocityX = sliceBuffer(buffer, 44, 4);
    forzaPacket.angularVelocityY = sliceBuffer(buffer, 48, 4);
    forzaPacket.angularVelocityZ = sliceBuffer(buffer, 52, 4);
    forzaPacket.yaw = sliceBuffer(buffer, 56, 4);
    forzaPacket.pitch = sliceBuffer(buffer, 60, 4);
    forzaPacket.roll = sliceBuffer(buffer, 64, 4);
    forzaPacket.normSuspensionTravelFl = sliceBuffer(buffer, 68, 4);
    forzaPacket.normSuspensionTravelFr = sliceBuffer(buffer, 72, 4);
    forzaPacket.normSuspensionTravelRl = sliceBuffer(buffer, 76, 4);
    forzaPacket.normSuspensionTravelRr = sliceBuffer(buffer, 80, 4);
    forzaPacket.tireSlipRatioFl = sliceBuffer(buffer, 84, 4);
    forzaPacket.tireSlipRatioFr = sliceBuffer(buffer, 88, 4);
    forzaPacket.tireSlipRatioRl = sliceBuffer(buffer, 92, 4);
    forzaPacket.tireSlipRatioRr = sliceBuffer(buffer, 96, 4);
    forzaPacket.wheelRotationSpeedFl = sliceBuffer(buffer, 100, 4);
    forzaPacket.wheelRotationSpeedFr = sliceBuffer(buffer, 104, 4);
    forzaPacket.wheelRotationSpeedRl = sliceBuffer(buffer, 108, 4);
    forzaPacket.wheelRotationSpeedRr = sliceBuffer(buffer, 112, 4);
    forzaPacket.wheelOnRumbleStripFl = sliceBuffer(buffer, 116, 4);
    forzaPacket.wheelOnRumbleStripFr = sliceBuffer(buffer, 120, 4);
    forzaPacket.wheelOnRumbleStripRl = sliceBuffer(buffer, 124, 4);
    forzaPacket.wheelOnRumbleStripRr = sliceBuffer(buffer, 128, 4);
    forzaPacket.wheelInPuddleFl = sliceBuffer(buffer, 132, 4);
    forzaPacket.wheelInPuddleFr = sliceBuffer(buffer, 136, 4);
    forzaPacket.wheelInPuddleRl = sliceBuffer(buffer, 140, 4);
    forzaPacket.wheelInPuddleRr = sliceBuffer(buffer, 144, 4);
    forzaPacket.surfaceRumbleFl = sliceBuffer(buffer, 148, 4);
    forzaPacket.surfaceRumbleFr = sliceBuffer(buffer, 152, 4);
    forzaPacket.surfaceRumbleRl = sliceBuffer(buffer, 156, 4);
    forzaPacket.surfaceRumbleRr = sliceBuffer(buffer, 160, 4);
    forzaPacket.tireSlipAngleFl = sliceBuffer(buffer, 164, 4);
    forzaPacket.tireSlipAngleFr = sliceBuffer(buffer, 168, 4);
    forzaPacket.tireSlipAngleRl = sliceBuffer(buffer, 172, 4);
    forzaPacket.tireSlipAngleRr = sliceBuffer(buffer, 176, 4);
    forzaPacket.tireCombinedSlipFl = sliceBuffer(buffer, 180, 4);
    forzaPacket.tireCombinedSlipFr = sliceBuffer(buffer, 184, 4);
    forzaPacket.tireCombinedSlipRl = sliceBuffer(buffer, 188, 4);
    forzaPacket.tireCombinedSlipRr = sliceBuffer(buffer, 192, 4);
    forzaPacket.suspensionTravelMetersFl = sliceBuffer(buffer, 196, 4);
    forzaPacket.suspensionTravelMetersFr = sliceBuffer(buffer, 200, 4);
    forzaPacket.suspensionTravelMetersRl = sliceBuffer(buffer, 204, 4);
    forzaPacket.suspensionTravelMetersRr = sliceBuffer(buffer, 208, 4);
    forzaPacket.carOrdinal = sliceBuffer(buffer, 212, 4);
    forzaPacket.carClass = sliceBuffer(buffer, 216, 4);
    forzaPacket.carPerformanceIndex = sliceBuffer(buffer, 220, 4);
    forzaPacket.driveTrain = sliceBuffer(buffer, 224, 4);
    forzaPacket.numCylinders = sliceBuffer(buffer, 228, 4);

    forzaPacket.positionX = sliceBuffer(buffer, 232, 4);
    forzaPacket.positionY = sliceBuffer(buffer, 236, 4);
    forzaPacket.positionZ = sliceBuffer(buffer, 240, 4);
    forzaPacket.speed = sliceBuffer(buffer, 244, 4);
    forzaPacket.power = sliceBuffer(buffer, 248, 4);
    forzaPacket.torque = sliceBuffer(buffer, 252, 4);
    forzaPacket.tireTempFl = sliceBuffer(buffer, 256, 4);
    forzaPacket.tireTempFr = sliceBuffer(buffer, 260, 4);
    forzaPacket.tireTempRl = sliceBuffer(buffer, 264, 4);
    forzaPacket.tireTempRr = sliceBuffer(buffer, 268, 4);
    forzaPacket.boost = sliceBuffer(buffer, 272, 4);
    forzaPacket.fuel = sliceBuffer(buffer, 276, 4);
    forzaPacket.distance = sliceBuffer(buffer, 280, 4);
    forzaPacket.bestLapTime = sliceBuffer(buffer, 284, 4);
    forzaPacket.lastLapTime = sliceBuffer(buffer, 288, 4);
    forzaPacket.currentLapTime = sliceBuffer(buffer, 292, 4);
    forzaPacket.currentRaceTime = sliceBuffer(buffer, 296, 4);
    forzaPacket.lap = sliceBuffer(buffer, 300, 4);
    forzaPacket.racePosition = sliceBuffer(buffer, 302, 1);
    forzaPacket.accelerator = sliceBuffer(buffer, 303, 1);
    forzaPacket.brake = sliceBuffer(buffer, 304, 1);
    forzaPacket.clutch = sliceBuffer(buffer, 305, 1);
    forzaPacket.handbrake = sliceBuffer(buffer, 306, 1);
    forzaPacket.gear = sliceBuffer(buffer, 307, 1);
    forzaPacket.steer = sliceBuffer(buffer, 308, 1);
    forzaPacket.normalDrivingLine = sliceBuffer(buffer, 309, 1);
    forzaPacket.normalAiBrakeDifference = sliceBuffer(buffer, 310, 1)
    return forzaPacket;
}
