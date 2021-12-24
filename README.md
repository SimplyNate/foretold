# foretold

Simple Forza Horizon 5 telemetry visualizer.

## Installation  
1. Clone this repository.
2. Navigate to the cloned repository in a terminal.
3. Run `npm install`
4. Run `npm run build`

## Usage  
`npm run listen`  
This starts a listener for Forza's UDP telemetry data, starts a Fastify server, and automatically
open the UI in a browser. When the listener detects Forza packets, it will open a WebSocket server
between the UDP listener and the browser webpage.

# Forza Telemetry Documentation  

| Position | Name                     | Length | Type   | Notes                                                                               |
|----------|--------------------------|--------|--------|-------------------------------------------------------------------------------------|
| 0        | isRaceOn                 | 4      | Int32  | Value > 0 == true                                                                   |
| 4        | timestamp                | 4      | UInt32 |                                                                                     |
| 8        | engineMaxRpm             | 4      | float  |                                                                                     |
| 12       | engineIdleRpm            | 4      | float  |                                                                                     |
| 16       | currentEngineRpm         | 4      | float  |                                                                                     |
| 20       | accelerationX            | 4      | float  |                                                                                     |
| 24       | accelerationY            | 4      | float  |                                                                                     |
| 28       | accelerationZ            | 4      | float  |                                                                                     |
| 32       | velocityX                | 4      | float  |                                                                                     |
| 36       | velocityY                | 4      | float  |                                                                                     |
| 40       | velocityZ                | 4      | float  |                                                                                     |
| 44       | angularVelocityX         | 4      | float  |                                                                                     |
| 48       | angularVelocityY         | 4      | float  |                                                                                     |
| 52       | angularVelocityZ         | 4      | float  |                                                                                     |
| 56       | yaw                      | 4      | float  |                                                                                     |
| 60       | pitch                    | 4      | float  |                                                                                     |
| 64       | roll                     | 4      | float  |                                                                                     |
| 68       | normSuspensionTravelFl   | 4      | float  | Normalized suspension travel: 0.0f == max stretch; 1.0 == max compression           |
| 72       | normSuspensionTravelFr   | 4      | float  |                                                                                     |
| 76       | normSuspensionTravelRl   | 4      | float  |                                                                                     |
| 80       | normSuspensionTravelRr   | 4      | float  |                                                                                     |
| 84       | tireSlipRatioFl          | 4      | float  | Normalized tire slip ratio: 0 == 100% grip, abs(ratio) > 1.0 means loss of traction |
| 88       | tireSlipRatioFr          | 4      | float  |                                                                                     |
| 92       | tireSlipRatioRl          | 4      | float  |                                                                                     |
| 96       | tireSlipRatioRr          | 4      | float  |                                                                                     |
| 100      | wheelRotationSpeedFl     | 4      | float  | Radians/sec                                                                         |
| 104      | wheelRotationSpeedFr     | 4      | float  |                                                                                     |
| 108      | wheelRotationSpeedRl     | 4      | float  |                                                                                     |
| 112      | wheelRotationSpeedRr     | 4      | float  |                                                                                     |
| 116      | wheelOnRumbleStripFl     | 4      | Int32  | 1 = on, 0 = off                                                                     |
| 120      | wheelOnRumbleStripFr     | 4      | Int32  |                                                                                     |
| 124      | wheelOnRumbleStripRl     | 4      | Int32  |                                                                                     |
| 128      | wheelOnRumbleStripRr     | 4      | Int32  |                                                                                     |
| 132      | wheelInPuddleFl          | 4      | float  | 1 = deepest, 0 = none                                                               |
| 136      | wheelInPuddleFr          | 4      | float  |                                                                                     |
| 140      | wheelInPuddleRl          | 4      | float  |                                                                                     |
| 144      | wheelInPuddleRr          | 4      | float  |                                                                                     |
| 148      | surfaceRumbleFl          | 4      | float  | Controller force feedback values                                                    |
| 152      | surfaceRumbleFr          | 4      | float  |                                                                                     |
| 156      | surfaceRumbleRl          | 4      | float  |                                                                                     |
| 160      | surfaceRumbleRr          | 4      | float  |                                                                                     |
| 164      | tireSlipAngleFl          | 4      | float  | 0 == 100% grip, abs(angle) > 1.0 == loss of traction                                |
| 168      | tireSlipAngleFr          | 4      | float  |                                                                                     |
| 172      | tireSlipAngleRl          | 4      | float  |                                                                                     |
| 176      | tireSlipAngleRr          | 4      | float  |                                                                                     |
| 180      | tireCombinedSlipFl       | 4      | float  | 0 == 100% grip, abs(slip) > 1.0 == loss of traction                                 |
| 184      | tireCombinedSlipFr       | 4      | float  |                                                                                     |
| 188      | tireCombinedSlipRl       | 4      | float  |                                                                                     |
| 192      | tireCombinedSlipRr       | 4      | float  |                                                                                     |
| 196      | suspensionTravelMetersFl | 4      | float  | Actual suspension travel in meters                                                  |
| 200      | suspensionTravelMetersFr | 4      | float  |                                                                                     |
| 204      | suspensionTravelMetersRl | 4      | float  |                                                                                     |
| 208      | suspensionTravelMetersRr | 4      | float  |                                                                                     |
| 212      | carOrdinal               | 4      | Int32  |                                                                                     |
| 216      | carClass                 | 4      | Int32  |                                                                                     |
| 220      | carPerformanceIndex      | 4      | Int32  |                                                                                     |
| 224      | driveTrain               | 4      | Int32  |                                                                                     |
| 228      | numCylinders             | 4      | Int32  |                                                                                     |
| 232      | unknown                  | 4      |        |                                                                                     |
| 236      | unknown                  | 4      |        |                                                                                     |
| 240      | unknown                  | 4      |        |                                                                                     |
| 244      | positionX                | 4      | float  |                                                                                     |
| 248      | positionY                | 4      | float  |                                                                                     |
| 252      | positionZ                | 4      | float  |                                                                                     |
| 256      | speed                    | 4      | float  | meters per second                                                                   |
| 260      | power                    | 4      | float  | watts                                                                               |
| 264      | torque                   | 4      | float  | newton meters                                                                       |
| 268      | tireTempFl               | 4      | float  | fahrenheit                                                                          |
| 272      | tireTempFr               | 4      | float  |                                                                                     |
| 276      | tireTempRl               | 4      | float  |                                                                                     |
| 280      | tireTempRr               | 4      | float  |                                                                                     |
| 284      | boost                    | 4      | float  |                                                                                     |
| 288      | fuel                     | 4      | float  |                                                                                     |
| 292      | distance                 | 4      | float  |                                                                                     |
| 296      | bestLapTime              | 4      | float  |                                                                                     |
| 300      | lastLapTime              | 4      | float  |                                                                                     |
| 304      | currentLapTime           | 4      | float  |                                                                                     |
| 308      | currentRaceTime          | 4      | float  |                                                                                     |
| 312      | lap                      | 2      | UInt16 |                                                                                     |
| 314      | racePosition             | 1      | UInt8  |                                                                                     |
| 315      | accelerator              | 1      | UInt8  |                                                                                     |
| 316      | brake                    | 1      | UInt8  |                                                                                     |
| 317      | clutch                   | 1      | UInt8  |                                                                                     |
| 318      | handbrake                | 1      | UInt8  |                                                                                     |
| 319      | gear                     | 1      | UInt8  |                                                                                     |
| 320      | steer                    | 1      | Int8   |                                                                                     |
| 321      | normalDrivingLine        | 1      | Int8   |                                                                                     |
| 322      | normalAiBrakeDifference  | 1      | Int8   |                                                                                     |
| 323      | unknown4                 | 1      |        |                                                                                     |


## Tire Temperature Documentation

Semi-Slick & Slick

| Color  | Lower Bound | Upper Bound |
|--------|-------------|-------------|
| blue   | <160F       | 160F        |
| green  | 160F        | 210F        |
| red    | 350F        | >350F       |


All other tires

| Color  | Lower Bound | Upper Bound |
|--------|-------------|-------------|
| blue   | <120F       | 120F        |
| green  | 120F        | 180F        |
| red    | 320F        | >320F       |
