import React from "react";
import image from "../.././assets/imagesec1.png";
import "./public.scss";
const TitleSecOne = () => {
  return (
    <section id="TitleSecOne" className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body TitleSecOne_prag">
              <h5 className="card-title">عنوان هام جدا</h5>
              <p className="card-text">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ
              </p>
              <p className="card-text">
                <input
                  className="input-grey-rounded"
                  type="text"
                  placeholder="ابحث"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSecOne;
