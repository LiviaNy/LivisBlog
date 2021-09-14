import { FC } from "react";
import { blogImageIconPath } from "../../common/setings";
import "./subPages.scss";

interface RoomPageProps {}

const RoomPage: FC<RoomPageProps> = () => {
  return (
    <div className="subpage">
      <h1>Your Ultimate Checklist of Baby Essentials</h1>
      <div className="content">
        <h2>
          There are a ton of to-dos when prepping for baby’s arrival, and
          shopping for all the baby essentials is not least among them. From
          setting up the nursery to gathering the gear for sleeping, eating and
          diapering, it’s easy to keep busy buying baby must-haves. After all,
          the amount of baby supplies a newborn requires can take any mom-to-be
          by surprise. But how do you figure out which are the baby items you
          can forget about, and which are the essential baby items you can’t
          live without? Don’t stress: We’re breaking it all down for you. Read
          on for a complete list of things you need for a new baby.
        </h2>
        <img src={`${blogImageIconPath}/cot.png`} alt="room" />
        <p>Baby room essentials</p>
        <ul>
          <li>Crib, cot, cradle or bassinet</li>
          <li>
            Firm, flat mattress that fits snugly in the crib (less than two
            fingers should fit between the mattress and crib)
          </li>
          <li>2-4 fitted crib sheets</li>
          <li>Baby monitor</li>
          <li>Diaper changing table or dresser with changing pad</li>
          <li>Toy basket- White noise machine (optional)</li>
          <li>Diaper pail (optional)</li>
          <li>Swaddle (optional)</li>
        </ul>
        <img src={`${blogImageIconPath}/wardrobe.png`} alt="wardrobe" />
        <p>Wardrobe essentials</p>
        <ul>
          <li>
            4-8 onesies (envelope folds at the shoulders and snaps at the
            crotch)
          </li>
          <li>
            4-8 shirts (kimono-style with snaps or envelope folds at the
            shoulders)
          </li>
          <li>4-8 pants (footies can be a great option)</li>
          <li>4-8 one-piece pajamas</li>
          <li>1-3 rompers or other dress-up outfits</li>
          <li>1-3 sweaters or jackets (front buttoned)</li>
          <li>
            4-7 socks or booties (shoes are unnecessary until baby starts
            walking
          </li>
          <li>
            1-3 newborn hats (broad-brimmed for a summer baby, soft cap that
            covers ears for a winter baby)
          </li>
          <li>No-scratch mittens</li>
          <li>2 wearable blankets for the winter</li>
          <li>Bunting bag or fleece suit for the winter</li>
          <li>Lightweight and heavy stroller blankets</li>
          <li>Gentle laundry detergent</li>
        </ul>
        <img src={`${blogImageIconPath}/diaper.png`} alt="diaper" />
        <p>
          2-3 large boxes of disposable newborn-size diapers, or 6-10 dozen
          cloth diapers and 6-8 diaper covers
        </p>
        <ul>
          <li>2-3 large boxes of unscented baby wipes</li>
          <li>2 large tubes of diaper cream</li>
          <li>Diaper bagt</li>
        </ul>
        <img src={`${blogImageIconPath}/bath.png`} alt="bath" />
        <p>Baby bathtub</p>
        <ul>
          <li>Baby shampoo and body wash</li>
          <li>2-4 hooded baby towels</li>
          <li>Soft washcloths</li>
          <li>Baby lotion (optional)</li>
        </ul>
        <img src={`${blogImageIconPath}/feed.png`} alt="feed" />
        <p>Baby feeding essentials</p>
        <ul>
          <li>8-10 bottles and nipples, both 4- and 8- ounce</li>
          <li>Bottle brush</li>
          <li>Dishwasher basket for small items</li>
          <li>Formula (if not nursing)</li>
          <li>Breast pump (if you plan to breastfeed)</li>
          <li>Milk storage bags (if you plan to breastfeed)</li>
          <li>Nursing pads (if you plan to breastfeed)</li>
          <li>Nipple cream (if you plan to breastfeed)</li>
          <li>High chair</li>
          <li>4-8 bibs</li>
          <li>4-8 burp cloths</li>
          <li>Baby feeding pillow (optional)</li>
          <li>Bottle warmer (optional)</li>
          <li>Bottle sterilizer (optional)</li>
        </ul>
        <img src={`${blogImageIconPath}/health.png`} alt="health" />
        <p>Baby health essentials</p>
        <ul>
          <li>Baby nail clippers or file</li>
          <li>Baby thermometer</li>
          <li>Petroleum jelly and sterile gauze (for circumcision care)</li>
          <li>First aid kit</li>
          <li>Cradle cap brush</li>
          <li>4-6 pacifiers (optional)</li>
        </ul>
        <img src={`${blogImageIconPath}/gear.png`} alt="gear" />
        <p>Baby gear essentials</p>
        <ul>
          <li>Infant car seat or convertible car seat</li>
          <li>Stroller</li>
          <li>Baby carrier</li>
          <li>Baby swing or bouncer</li>
          <li>Cradle cap brush</li>
          <li>4-6 pacifiers (optional)</li>
        </ul>
      </div>
      <div className="comments">
        <h1>Do not forget to share your expreience.</h1>
      </div>
    </div>
  );
};

export default RoomPage;
