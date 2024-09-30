import './BaseLog.css';


function BaseLog({PAGETITLE, PAGEDESCRIPTION, PAGEDESCRIPTION2, COMPONENT}) {
    return (
      <div className="backL">
          <div className="BackgroundB">
              <div className="BackgroundB1">
                  <h2 className="nameL">
                      <style>
                          @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                      </style>
                      TIQUETEO
                  </h2>
                  <h1 className="titlePage">
                      <style>
                          @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                      </style>
                      {PAGETITLE}
                      <h2 className="titlePage2">
                          <style>
                              @import
                              url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                          </style>
                          {PAGEDESCRIPTION} <br/> {PAGEDESCRIPTION2}
                      </h2>
                  </h1>
              </div>
          </div>
          {COMPONENT && <COMPONENT />}
      </div>

    );
}

export {BaseLog};