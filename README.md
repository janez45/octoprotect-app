# octoprotect_app

## Inspiration
The concept of Octoprotect originated from study struggles at university. How often are you studying in a library, only to need to get up whatever reason, like the washroom? Well, it'll definitely be inconvenient for you to grab all your stuff with you. Someone's likely to take your place while you're gone too. But thefts are common, and you don't want your devices that cost thousands of dollars to be stolen, either. So what shall we do? We chose to build Octoprotect, a modern anti-theft system that guards your unattended items.

## About Octoprotect
Octoprotect is a modern anti-theft system that integrates a mobile app communicating with a Raspberry Pi over bluetooth to protect one's personal belongings. The center of the physical device is called the Nexus, with multiple accelerometer based devices called Titans protruding from the Nexus, hence the octupus shape and its name. Users connect the mobile app to the physical device, from where they can adjust device settings and notifications are pushed if the physical accelerometers detect motion.

## About this repository
This repository contains frontend mobile app of Octoprotect, which features the main user interface of Octoprotect. It features:
- A QR code scanner for easy device pairing
- Push notifications that are sent to the user if motion/a suspected theft is detected
- Real-time monitoring of all titans
- Ability to adjust the sensitivity of the accelerometers
- Remote activation/deactivation of the device

## Langauges/Frameworks
- React Native
- Redux
- WebSocket (to connect to the backend)

## Design
Original Figma Design
<img width="1198" alt="image" src="https://github.com/janez45/octoprotect-app/assets/97042818/c4b2646c-e6dc-4cb0-9c48-589a992b54b2">

Final Outcome
![IMG_5132](https://github.com/janez45/octoprotect-app/assets/97042818/aac90b0d-aa04-4937-b92f-fa6fb82ad895)
![IMG_5135](https://github.com/janez45/octoprotect-app/assets/97042818/b8424539-e4f9-4bfd-8edb-0364b1f3314f)
![IMG_5136](https://github.com/janez45/octoprotect-app/assets/97042818/98fb8f06-2536-4bd5-a0c0-69a4f3895255)
![IMG_5137](https://github.com/janez45/octoprotect-app/assets/97042818/274f7d51-dd83-4a05-ab1b-9b3072044077)


