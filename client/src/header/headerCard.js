import "../App.css";
import {Card, CardContent} from "@material-ui/core";

function HeaderCard() {
  return (
    <Card style={{backgroundColor: "white", width: "95%", marginTop: 10}}>
      <CardContent>
        <div>
          <label className="App-label">Find Your Tututor</label>
          <input type="textarea" name="textValue" placeholder="zipcode" />
          <input
            type="textarea"
            name="textValue"
            placeholder="Find by expertise"
          />
        </div>
      </CardContent>
    </Card>
  );
}
export default HeaderCard;
