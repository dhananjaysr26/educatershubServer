import {Card, CardContent} from "@material-ui/core";
import {Fragment} from "react";
import "../App.css";
function ProfileCard() {
  return (
    <div style={{width: "95%"}}>
      <Card
        style={{
          backgroundColor: "white",
          //width: "55%",
          marginTop: 10,
        }}
      >
        <div className="float-child-element">
          <div style={{marginLeft: "10%"}}>
            <CardContent>
              <img
                src={"teacher.jpg"}
                width="25%"
                height="25%"
                style={{
                  alignItems: "flex-start",
                  borderRadius: "50%",
                  borderWidth: 5,
                  backgroundColor: "red",
                }}
              />
            </CardContent>
            <div>
              <div>Mary</div>

              <label>Longerlastname</label>
            </div>
            <div style={{marginTop: 20}}>
              <label style={{color: "green", fontSize: "20px"}}>LOCATION</label>
              <br />
              <label style={{fontSize: "19px"}}>Los Angeles , california</label>
            </div>
          </div>
          <br />
          <div style={{marginLeft: "10%"}}>
            <br />
            <div style={{color: "green"}}>About us</div>
            <div style={{marginTop: "5%"}}>
              <label style={{fontSize: "19px"}}>
                We are on the hunt for a self-motivated and experienced teacher
                to join our qualified team of educators. As a teacher, you will
                be responsible for cultivating the students’ interest in
                education and development
              </label>
            </div>
          </div>
        </div>

        {/* <div style={{marginLeft: 15, width: "35%"}}> */}
        <div className="float-child-element">
          <div style={{marginLeft: "10%"}}>
            <br />
            <div style={{color: "green"}}>Courses</div>
            <img src={"eng.jpg"} width="17%" style={{padding: 5}} />
            <img src={"maths.jpg"} width="17%" style={{padding: 5}} />
            <img src={"science.jpg"} width="17%" style={{padding: 5}} />
            <img src={"history.jpg"} width="17%" style={{padding: 5}} />
          </div>
          <div style={{marginLeft: "10%"}}>
            <img src={"hindi.jpg"} width="17%" style={{padding: 5}} />
            <img src={"marathi.jpg"} width="17%" style={{padding: 5}} />
          </div>
          <div style={{marginLeft: "10%"}}>
            <br />
            <div style={{color: "green"}}>AREA OF EXPERTISE</div>
            <div style={{marginTop: "5%"}}>
              <label
                style={{
                  fontSize: "19px",
                  backgroundColor: "#ECE6E5",
                  padding: 5,
                  marginLeft: 5,
                }}
              >
                Teaching
              </label>
              <label
                style={{
                  fontSize: "19px",
                  backgroundColor: "#ECE6E5",
                  padding: 5,
                  marginLeft: 5,
                }}
              >
                Teaching
              </label>
              <label
                style={{
                  fontSize: "19px",
                  backgroundColor: "#ECE6E5",
                  padding: 5,
                  marginLeft: 5,
                }}
              >
                Teaching
              </label>
              <label
                style={{
                  fontSize: "19px",
                  backgroundColor: "#ECE6E5",
                  padding: 5,
                  marginLeft: 5,
                }}
              >
                Teaching
              </label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default ProfileCard;
