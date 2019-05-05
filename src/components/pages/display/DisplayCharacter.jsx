import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../../layout/Navbar';
import FranchiseHeader from '../../layout/header/FranchiseHeader';
import {getCharacter} from '../../../actions/characterActions';
import {Page} from '../../../utils/styledClasses';

import '../css/page.css';

class DisplayReview extends React.Component {
  state = {
    currentImage: null,
    currentImageIndex: null
  }

  componentDidMount() {
    if (!this.props.character) {
      this.props.getCharacter(this.props.match.params.guid);
    } else if (this.props.character.guid !== this.props.match.params.guid) {
      this.props.getCharacter(this.props.match.params.guid);
    }
  }

  componentDidUpdate() {
    let about = document.querySelector('#about_review');
    if (about !== null) {
      let links = about.getElementsByTagName('a');
      let lazyImages = about.querySelectorAll('.js-lazy-load-image');
      for (const link of links) {
        link.removeAttribute('href');
      }
      lazyImages.forEach(lazyImage => {
        lazyImage.src = lazyImage.dataset.src
      })
    }
  }

  displayGames = games => {
    return games.map(game => {
      return (
        <li className="display_result" key={game.id} >
          <Link to={`/games/game/${game.id}`} >
            <p>{game.name} <i className="fas fa-chevron-right"></i></p>
          </Link>
        </li>
      )
    })
  }


  scrollToTop = () => this.pageTop.scrollIntoView({behavior: 'smooth'});

  render() {
    const {history, character} = this.props;
    return (
      <Page className="page app">
        <Navbar history={history} />
        {character && (
          <React.Fragment>
            <div ref={node => this.pageTop = node}></div>
            <FranchiseHeader franchise={character} headerClass='character_header' image={false} title='Character: ' />
            <section className="page_content review character">
              <section className="about_review" id='about_review'>
                {character.description ? <div dangerouslySetInnerHTML={{ __html: character.description }} /> : <h2 className='not_available'>Not Available</h2>}
              </section>
              <section className="character_games">
                <h2>Appears In</h2>
                <ul>
                  {this.displayGames(character.games)}
                </ul>
              </section>
            </section>
          </React.Fragment>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.characters.character
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacter: guid => dispatch(getCharacter(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayReview);