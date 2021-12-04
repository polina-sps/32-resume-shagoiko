 import { avatarka } from './assets/image/avatarka';
 import { infoBio } from './assets/infoBio/infoBio';
 import { infoWorker } from './assets/infoWorker/infoWorker';
 import { dateSign } from './assets/dateAndSign/dateSign';
 import "./styles/style";


 export const wrapper = document.createElement(`div`);
 document.body.appendChild(wrapper);
 wrapper.classList.add(`wrapper`);

 export const imgAndInfoWrapper = document.createElement('div');
 wrapper.appendChild(imgAndInfoWrapper);
 imgAndInfoWrapper.classList.add(`imgAndInfoWrapper`);

 export const dateAndSignWrapper = document.createElement('div');
 wrapper.appendChild(dateAndSignWrapper);
 dateAndSignWrapper.classList.add(`dateAndSignWrapper`);




 avatarka.createAvatarka();
 infoWorker.createInfoWorker();
 infoBio.createInfoBio();
 dateSign.createDateSign();