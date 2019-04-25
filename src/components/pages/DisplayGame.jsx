import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Navbar from '../layout/Navbar';
import DisplayHeader from '../layout/DisplayHeader';
import {getGame} from '../../actions/gameActions';
import {Page} from '../../utils/styledClasses';

import './css/page.css';

class Games extends React.Component {
  componentDidMount() {
    if (!this.props.game) {
      this.props.getGame(this.props.match.params.guid);
    } else if (this.props.game.guid !== this.props.match.params.guid) {
      this.props.getGame(this.props.match.params.guid);
    }
  }

  scrollDown = () => {
    this.pageDown.scrollIntoView({behavior: 'smooth'});
  }

  aToLink = (description) => {
    var re = new RegExp('<a(.*?)<\/');
    // let string = '<a href="/shang-tsung/3005-92/" data-ref-id="3005-92">Shang Tsung</a><a href="/shang-tsung/3005-92/" data-ref-id="3005-92">Shang Tsung</a>';
    let string = '<a href="/shang-tsung/3005-92/" data-ref-id="3005-92">Shang Tsung</a>';
    let string2 = string.replace(re, 'tag')
    // let string2 = string.replace(/<a(.*?)<\//, 'tag')

//     var e = document.getElementsByTagName('span')[0];
// var d = document.createElement('div');
// d.innerHTML = e.innerHTML;
// e.parentNode.replaceChild(d, e);
    
  console.log(string2);
  }

  sortPlatforms = (platforms, allPlatforms) => {
    return  platforms.reduce((sortedPlatforms, platform) => {
      allPlatforms.some(pForm => {
        if (pForm.id === platform.id) {
          sortedPlatforms.push(pForm);
        }
      });
      return sortedPlatforms;
    }, []);
  }

  render() {
    const {game} = this.props;
    return (
      <Page className="page app">
        <Navbar />
        {game && (
          <React.Fragment>
            <DisplayHeader game={game} scrollDown={this.scrollDown} />

            <div ref={node => this.pageDown = node}></div>
            <section className="page_content game">
              <section className="images"></section>
              <section className="about">
                <div dangerouslySetInnerHTML={{ __html: '<Link>Hey</Link>' }} />
                {this.aToLink(game.description)}
                <div dangerouslySetInnerHTML={{ __html: game.description }} />
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
    game: state.games.game
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGame: guid => dispatch(getGame(guid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);