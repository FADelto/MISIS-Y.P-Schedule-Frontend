import React from 'react';
import styles from './Schedule.module.css';

const Schedule = () => {
  // function createMarkup() {
  //   return {__html: '<img class=imgNews src=https://api.pachca.com/api/imageproxy/300,fit/https://pachca-prod-uploads.s3.storage.selcloud.ru/attaches/files/282528/D4F38ED6-8B1F-40A8-A917-90CD306DB5D5/8C63A98D-AC5E-40BD-950C-F8A28504691C.jpeg?response-cache-control=max-age%3D3600%3B&response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=142155_staply%2F20231204%2Fru-1a%2Fs3%2Faws4_request&X-Amz-Date=20231204T090655Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c34e9857ea77ec30b2b5083e5f1adeae9033c6f36147c7d7b4eb4a14056c31e6 />'};
  // }

  return (
    <div>
      <h2 className={styles.title}>Расписание</h2>
      {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
    </div>
  )
}

export default Schedule;