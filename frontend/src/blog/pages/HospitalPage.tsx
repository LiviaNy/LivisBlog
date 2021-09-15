import { FC } from "react";
import CommentsHolder from "../../comment/components/CommentHolder";
import { blogImageIconPath } from "../../common/setings";
import "./subPages.scss";

interface HospitalPageProps {}

const HospitalPage: FC<HospitalPageProps> = () => {
  return (
    <div className="subpage">
      <h1>
        It is the final count down!!! - What to put in your Hospital Bag?!?!
      </h1>
      <div className="content">
        <h2>
          Packing your hospital bag marks an exciting time in your pregnancy.
          It’s a good idea to have it ready two weeks before your due date –
          just in case your baby makes an early appearance. If you’re not sure
          what to take with you, read my blog. Remember to show your birth
          partner what you’ve packed too, so they know where to find things in a
          hurry. To ensure you’ve got everything you’ll need, see my list of
          hospital bag must-haves, recommended by midwives, pregnancy advisors
          and mum bloggers.
        </h2>
        <img src={`${blogImageIconPath}/mom.png`} alt="mom" />
        <p>For You</p>
        <ul>
          <li>Birth plan and maternity notes</li>
          <li>Socks or slippers</li>
          <li>Nursing bras and breast pads</li>
          <li>8 pairs of maternity knickers</li>
          <li>Loose-fitting nightdress and dressing gown</li>
          <li>Sanitary or maternity pads</li>
          <li>Wash bag with flannel, shampoo, toothbrush and toothpaste</li>
          <li>Loose, comfy 'going-home' clothes</li>
          <li>Dark-coloured or old towels</li>
          <li>Flip flops</li>
        </ul>
        <img src={`${blogImageIconPath}/baby.png`} alt="baby" />
        <p>For baby</p>
        <ul>
          <li>Baby vests and sleep suits</li>
          <li>Scratch mitts and socks</li>
          <li>Baby hat</li>
          <li>Baby blanket</li>
          <li>A rear-facing group 0+ car seat</li>
          <li>Going home outfit</li>
          <li>Muslin squares</li>
          <li>Nappies</li>
          <li>Nappy bag</li>
          <li>Cotton wool</li>
        </ul>
        <img src={`${blogImageIconPath}/dad.png`} alt="dad" />
        <p>For partner</p>
        <ul>
          <li>Money for car park</li>
          <li>Mobile phone and charger</li>
          <li>Toiletries</li>
          <li>Snacks</li>
          <li>A change of clothes</li>
          <li>Drinks</li>
          <li>Entertainment</li>
        </ul>
      </div>
      <div className="comments">
        <h1>Do not forget to share your expreience.</h1>
        <CommentsHolder type="hospital" />
      </div>
    </div>
  );
};

export default HospitalPage;
