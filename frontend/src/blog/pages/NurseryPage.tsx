import { FC } from "react";
import CommentsHolder from "../../comment/components/CommentHolder";
import { blogImageIconPath } from "../../common/setings";
import "./subPages.scss";

interface NurseryPageProps {}

const NurseryPage: FC<NurseryPageProps> = () => {
  return (
    <div className="subpage">
      <h1>Toddler Daycare Packing List</h1>
      <div className="content">
        <h2>
          Just when you get used to the routine at your daycare center's baby
          room, your child gets promoted to the toddler room. This change comes
          with a new list of things your child needs each day, and your care
          provider will likely inform you of the items you need to send (and
          those you can retire).
        </h2>
        <img src={`${blogImageIconPath}/nursery.png`} alt="mom" />
        <p>Recommended Items for a Toddler to Bring to Daycare</p>
        <ul>
          <li>Diapers, Wipes, and Underwear</li>
          <li>Extra Outfits (Label everything)</li>
          <li>Nap-Time Necessities</li>
          <li>Food and Drinks</li>
          <li>Medication and Sunscreen</li>
          <li>Shoes for inside play</li>
        </ul>
      </div>
      <div className="comments">
        <h1>Do not forget to share your expreience.</h1>
        <CommentsHolder type="nursery" />
      </div>
    </div>
  );
};

export default NurseryPage;
