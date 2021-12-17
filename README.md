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

| Position | Name                   | Length | Type   | Notes                                                                               |
|----------|------------------------|--------|--------|-------------------------------------------------------------------------------------|
| 0        | isRaceOn               | 4      | Int32  | Value > 0 == true                                                                   |
| 4        | timestamp              | 4      | UInt32 |                                                                                     |
| 8        | engineMaxRpm           | 4      | float  |                                                                                     |
| 12       | engineIdleRpm          | 4      | float  |                                                                                     |
| 16       | currentEngineRpm       | 4      | float  |                                                                                     |
| 20       | accelerationX          | 4      | float  |                                                                                     |
| 24       | accelerationY          | 4      | float  |                                                                                     |
| 28       | accelerationZ          | 4      | float  |                                                                                     |
| 32       | velocityX              | 4      | float  |                                                                                     |
| 36       | velocityY              | 4      | float  |                                                                                     |
| 40       | velocityZ              | 4      | float  |                                                                                     |
| 44       | angularVelocityX       | 4      | float  |                                                                                     |
| 48       | angularVelocityY       | 4      | float  |                                                                                     |
| 52       | angularVelocityZ       | 4      | float  |                                                                                     |
| 56       | yaw                    | 4      | float  |                                                                                     |
| 60       | pitch                  | 4      | float  |                                                                                     |
| 64       | roll                   | 4      | float  |                                                                                     |
| 68       | normSuspensionTravelFl | 4      | float  | Normalized suspension travel: 0.0f == max stretch; 1.0 == max compression           |
| 72       | normSuspensionTravelFr | 4      | float  |                                                                                     |
| 76       | normSuspensionTravelRl | 4      | float  |                                                                                     |
| 80       | normSuspensionTravelRr | 4      | float  |                                                                                     |
| 84       | tireSlipRatioFl        | 4      | float  | Normalized tire slip ratio: 0 == 100% grip, abs(ratio) > 1.0 means loss of traction |
| 88       | tireSlipRatioFr        | 4      | float  |                                                                                     |
| 92       | tireSlipRatioRl        | 4      | float  |                                                                                     |
| 96       | tireSlipRatioRr        | 4      | float  |                                                                                     |
| 100      |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
|          |                        |        |        |                                                                                     |
