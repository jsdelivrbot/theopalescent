import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Panel, Col, Row } from 'react-bootstrap';
import { Socials, Prompt, PoemRow, PoemCol } from './common';

class Prose extends Component {
  render() {
    const { containerStyle } = this.props;
    return (
      <div id={containerStyle} className="container">
        <h3>Prose</h3>
        <Row>
          <Col sm={6}>
            <Panel>
              <p>All prose submissions will be published on this page. If you're looking for a piece from a particular month just click on that month. Otherwise, have a good scroll through!</p>
              <ul>
                <li><Link to="prose/03-2017">March 17</Link></li>
              </ul>
            </Panel>
          </Col>
          <Col sm={6}>
            <Socials />
            <br />
            <Prompt />
            <br />
          </Col>
        </Row>
        &nbsp;
        <hr />
        &nbsp;
        <PoemRow>
          <PoemCol
            weight={12}
            title="Carrots"
            author="Elijah Taylor"
          >
            <p>Freya picks carrots for a living. Bastun’s surface is mainly fields, so there’s no chance she’ll ever run out of work. She spends her days walking up and down uneven tracks while tuvens swoop in to snatch at crops and her feet accumulate blisters. She walks, she stops, she grabs a carrot’s top, she twists, she lifts, she replants a seed, she walks.</p>
            <p>Some days, she works in carrot packaging instead. These days are even worse; the sky on Bastun is always grey, but it is at least a view. In the warehouse everything is metal, polished to a shine and she spends her days squinting. She takes carrots from their outside containers, she stacks them in a new box, she seals the lid, she carries it to loading, she walks back to the outside boxes.</p>
            <p>Carrot collection leaves a lot of time for thinking. She imagines where the carrots are going and tries not to be bitter about the fact a vegetable will be better travelled than she will ever be.</p>
            <p className="half">///</p>
            <p>Freya’s home is under a railway bridge. There’s only the two of them; mum is gone. Freya can’t remember her, so she doesn’t know if gone means dead or just elsewhere.</p>
            <p>Dad is sitting in the kitchen when she gets home. He’s clutching a bottle of the blue stuff he calls medicine. Freya is nineteen, old enough to know the difference between something being medicine and something being medicinal.</p>
            <p>‘Good shift?’</p>
            <p>‘Good enough.’</p>
            <p>A train rattles overhead, casting the kitchen from light to dark and back again, painting her father in contrasts and edges.</p>
            <p>‘Good enough to keep the lights ticking I hope.’ Dad smiles and holds a hand out. Her wages go into it; twenty credits for a hundred carrots.</p>
            <p className="half">///</p>
            <p>Freya arrives home at the end of a shift to find a note pushed under their door. She handles it with caution, but it’s nothing official. It’s from the woman who lives opposite her grandmother’s old flat and reads: someone squatting in Benning Street.</p>
            <p>Benning Street apartment was left to them. They rent it out to workers and travellers, usually workers since Bastun offers only vegetables and grey skies.</p>
            <p>The squatter must be recent, workers looked round it only three weeks ago.</p>
            <p>Freya goes to check it out between shifts. It sits away from the street, the entrance up round the back. The stairs shake beneath her feet, the gaps in between showing the dried out mud below.</p>
            <p>She pushes her key into the lock and leans against the door to get it open, rust making it stick. Inside, all seems quiet. She walks through the kitchen-diner, running her hand along the wrap-covered couch. Dust comes loose and stains her fingers grey. The bedroom is all clear, the bathroom is the same.</p>
            <p>She turns to leave and there’s a woman standing in the doorway.</p>
            <p>She’s tall and muscular with close cropped dark hair and bruises colouring her jaw. Her grey smock is torn at the collar.</p>
            <p>She’s aiming a gun at her.</p>
            <p>‘What are you doing in here?’ Freya says. She strives for authority but her voice shakes on the way out.</p>
            <p>‘This place was not occupied when I arrived,’ she answers.</p>
            <p>It’s not an answer at all, not really. Freya scowls to let her know what she thinks of it. ‘It is occupied. I own it.’</p>
            <p>‘Do you live here?’</p>
            <p>‘I own here.’</p>
            <p>The woman frowns. ‘Why would you own this place if you do not live here?’</p>
            <p>‘I…’ Freya stops, shakes her head. ‘Why are you so interested? Point is you can’t stay unless you rent it.’</p>
            <p>She tilts her head and blinks three times in rapid succession. ‘Rent…yes. I would like to rent this apartment.’</p>
            <p>Freya’s not sure she should be even considering renting to a woman like this, but beggars can’t be choosers. ‘How about you start by putting your gun down?’</p>
            <p>She lowers it to her side but doesn’t let go of it.</p>
            <p>‘If you’re serious then I’ll need to bring the paperwork,’ Freya says. ‘I’ll need to-’</p>
            <p>‘No,’ she interrupts. ‘No paperwork.’</p>
            <p>‘You can’t rent without paperwork.’</p>
            <p>The stranger empties her pockets. Credits fall out; one-hundred credit notes, imprinted with the Imperium’s Sigil. She’d have to pack five hundred carrots for just one of those notes.</p>
            <p>‘Okay,’ Freya says, already stooping to snatch them up. ‘No paperwork. But nobody can know you’re here. One of the neighbours is already suspicious.’</p>
            <p>The stranger tilts her head and blinks again. The gesture draws attention to a lump on her neck. It’s large, and looks strangely solid. ‘I will be sure to be less conspicuous.’</p>
            <p>‘Good.’ Freya holds her hand out, figuring she should be polite since she’s now her landlord, ‘I’m Freya. Welcome to Bastun.’</p>
            <p>The stranger shakes her hand; her grip is strong and warm. ‘Thank you, Freya. My name is Eva.’</p>
            <p className="half">///</p>
            <p>Four hundred packaged carrots later, Freya goes back to the apartment. It’s not because anyone is suspicious – Eva has been as inconspicuous as she promised to be. It’s not even a conscious decision, really. One minute she was walking home, the next she was turning and taking the path into town, taking the steps up to the flat.</p>
            <p>She pretends to fuss with her keys as she knocks. The door cracks open, just enough for Freya to see one dark eye peering out. ‘Freya,’ Eva says. ‘Here for more rent?’</p>
            <p>She thinks of the Imperium credits shoved under her mattress and wants to say yes. But Eva’s paid more than the apartment is worth already. ‘No,’ she says. ‘Just wanted to see how you were settling in.’</p>
            <p>Another pause, then Eva opens the door and gestures for her to step inside. She’s wearing a white smock now, this one undamaged. The bruises have healed to a pale yellow.</p>
            <p>Inside, the flat smells like roasting meat, warm and inviting. Freya’s stomach aches, full of only water.</p>
            <p>‘Do you like the apartment?’ Freya says.</p>
            <p>‘It is suitable, thank you.’</p>
            <p>Freya stops in the living room. Six tuvens are dead, suspended along the far wall. Workers try to shoot them down at the fields, but she’s only ever known someone to get two at once.</p>
            <p>‘Did you…?’ Freya gestures towards the carcasses.</p>
            <p>Eva nods.</p>
            <p>‘I’ve never known someone to kill six tuvens,’ Freya says.</p>
            <p>An expression flits across Eva’s face, so quick Freya has no time to assign meaning to it. ‘I am a decent shot.’</p>
            <p>‘I can see that.’</p>
            <p>Eva turns away, walking towards the stove where a pot is boiling. ‘I am making dinner. You are welcome to stay.’</p>
            <p>‘Oh, no,’ Freya answers even as her gut twists. ‘It’s fine. I didn’t come out here to eat your food.’</p>
            <p>‘I have too much food for just me,’ Eva says.</p>
            <p>She really shouldn’t. She should go home, get some sleep between shifts. But she thinks of her father’s upturned palm, thinks of the flickering lights and the rattle of the train.</p>
            <p>They eat on the couch with bowls of stew balanced on their laps. It’s thick, settling in her stomach like a warming weight. Her feet lose their ache from a day of walking, the tension she’s so used to carrying relaxes, and her eyelids grow heavy.</p>
            <p>She dozes off without meaning to. When she wakes it’s twilight. She’s curled up with a blanket draped over her.</p>
            <p>Her watch tells her she has an hour before her night shift in packaging. Freya stumbles to her feet, tiredness making her clumsy. She catches her hip on the side of the couch and ends up doubled over.</p>
            <p>‘Freya.’</p>
            <p>When she looks up Eva is standing in the bedroom doorway.</p>
            <p>‘Sorry,’ Freya says. ‘I didn’t mean to fall asleep. I really didn’t. I’ll be off now.’</p>
            <p>‘You do not need to apologize for being tired.’</p>
            <p>‘I’m your landlord. Landlords aren’t supposed to fall asleep on their tenant’s couches.’</p>
            <p>Eva smiles; it dimples her cheeks, an expression so sweet it has Freya smiling in return. ‘As your tenant, I give you permission to fall asleep on my couch.’</p>
            <p>That shouldn’t make her cheeks warm, but it does and she ducks her head to hide it. ‘I need to get to work. Thanks for dinner.’</p>
            <p>‘You are welcome. You…’</p>
            <p>Freya’s on her way to the door, but the sudden hesitance in Eva’s words make her stop. She half-turns and Eva is looking at the floor. She is a tall woman, right then she doesn’t look it.</p>
            <p>‘I can come back and see you another day?’</p>
            <p>Eva looks up at her; her smile is the only answer Freya needs.</p>
            <p className="half">///</p>
            <p>Freya has spent the last three years counting the time in carrots. Now she counts it in carrots and Eva.</p>
            <p>She sees her four times a week, always in the apartment. Eva cooks, or they watch shows on the vid-screen, their knees bumping together as they curl up on the couch. Whenever Imperium announcements come on, Eva goes stiff or leaves the room.</p>
            <p>Eva never explains her bruises and Freya never asks. She does wonder if the thing that put them there will ever catch up with her. She hopes not.</p>
            <p>Freya’s not a fool though. It’s a good thing, going to Eva’s apartment, and good things never last. Eva will leave or get bored of her and she will be left with Bastun’s one constant: carrots.</p>
            <p>Sure enough, their routine ends two months after Eva first arrived.</p>
            <p>Freya’s on her way to work when she sees the Imperium cars. They’ve got big wheels and blacked-out windows and the Imperium’s sigil printed on the side.</p>
            <p>She turns around and runs back, not stopping until she reaches the apartment.</p>
            <p>‘Imperium,’ she pants when Eva opens the door.</p>
            <p>‘I know,’ Eva says.</p>
            <p>She lets her inside. The apartment is as neat as it was the first time she arrived, the dust protectors all back on, no signs Eva was ever there. It makes Freya’s lungs tight with something other than exertion.</p>
            <p>‘You’re leaving?’</p>
            <p>‘Yes. The Imperium have come to reclaim me.’</p>
            <p>‘Reclaim?’</p>
            <p>Eva gestures to the lump on her neck. ‘They made me in a lab three systems away.’</p>
            <p>It takes a moment for realisation to hit. The lump is a chip? A power socket? Something unnatural anyway, something that gives Eva life. Artificial life, the Imperium’s greatest triumph. Freya’s heard about it before, but she never thought she’d see an example in the flesh.</p>
            <p>‘You’re a robot?’</p>
            <p>‘No. I am alive.’</p>
            <p>She thinks of the warmth of her hand, the dimples made by her smile, the huff of her breath against her cheek when they sat close together. It’s hard to put that next to the fact that Eva was made in a laboratory, that she is as much machine as anything else.</p>
            <p>‘I have to go before they can arrive. I will miss you, Freya.’</p>
            <p>Eva steps past her towards the door. Freya stares at the empty apartment, imagines re-renting it to more workers, imagines that money going to her father, imagines her life never expanding past the plains of endless carrots. She sees herself as a sixty year old woman, feet more blisters than skin, hands stained orange.</p>
            <p>Beyond Bastun there are millions of planets and galaxies and stars, all full of colour and life, hosting billions upon billions of people. She imagines seeing them, imagines even getting close.</p>
            <p>‘I’m coming with you,’ she says.</p>
            <p>Her father will miss her, maybe. He’ll definitely miss her income. But as he searches the flat for signs of where she’s gone, he’ll find the credits from Eva’s first rent payment. So he’ll be fine. Or he won’t. Freya realises it doesn’t matter to her either way.</p>
            <p>Eva takes her offered hand. Outside, the dawn holds a thousand promises. Freya intends to fulfil them all.</p>
          </PoemCol>
        </PoemRow>
        {/* <h4 className="half-theme">There are no entries</h4>
        <Panel className="half-theme">
          <p className="vertical-align-theme">Why don't you help us change that?</p>
        </Panel> */}
        &nbsp;
      </div>
    );
  }
}

const mapStateToProps = ({ containerStyleReducer }) => {
   const { containerStyle } = containerStyleReducer;
   return { containerStyle };
};

export default connect(mapStateToProps)(Prose);
