import React, { useEffect, useState } from 'react';
import Home from './Home';
import Filter from './Filter';
import Result from './Result';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const [filter, setFilter] = useState('')
  const changeView = (view) => {
    setCurrentView(view)
  }

  let jobs = [
    { jobName: "Paladin", role: "tank", color: 'blue', checked: true, info: "Paladin is a defensive job, that can protect its allies. Together with its sword and shield,it also possesses both offensive and healing magic." },
    { jobName: "Gunbreaker", role: "tank", color: 'blue', checked: true, info: "With its gunblade, the gunbreaker can unleash powerfull explosive attacks and combos by collecting cartridges from its standard combo" },
    { jobName: "Dark knight", role: "tank", color: 'blue', checked: true, info: "Dark knight uses a two-handed great sword and dark magic to inflict damage on their enemies and defend themselves and their allies." },
    { jobName: "Warrior", role: "tank", color: 'blue', checked: true, info: "Warrior is beast incarnate. All warriors have an inner beast who is just waiting to let loose with devastating attacks, delivered by a big heavy axe." },
    { jobName: "Reaper", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "Reaps their enemies' soul with their scythe, and to bring forth their avatar from the void to bring high intensity attacks." },
    { jobName: "Ninja", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "With a set of daggers the ninja slashes their enemies. By using mudra you can unleash a high variety of ninjutsu onto your enemies." },
    { jobName: "Samurai", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "Performs different combos to amass power to be unleahed in high damage attacks by using their katana." },
    { jobName: "Monk", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "The absolute melee DPS, the monk attacks rapidly with their punches and kicks from all directions. Amassing their chakra to unleash powerfull attacks." },
    { jobName: "Dragoon", role: "DPS", sub_role: "melee", color: 'red', checked: true, info: "The dragoon uses a lance and jumping attacks to pierce their enemies. They also apply the dragons' own powers in battle." },
    { jobName: "Bard", role: "DPS", sub_role: "range", color: 'red', checked: true, info: "The bard attacks by using a bow with differnt type of arrows, some to do direct damage, and others to do damage over time. They also support their allies with inspiring music on the battlefield." },
    { jobName: "Machinist", role: "DPS", sub_role: "range", color: 'red', checked: true, info: "With a gun in hand the machinist takes down their enemies from a distance with bullets and machinery." },
    { jobName: "Dancer", role: "DPS", sub_role: "range", color: 'red', checked: true, info: "Buff your party and/or your dance partner with high spirited dances." },
    { jobName: "Red mage", role: "DPS", sub_role: "magic", color: 'red', checked: true, info: "Wielding both black and white magic with ease. Build up your reservoires of red magic by alternating between which spells you use, and unleash it with your rapier. Red mages are very versatile." },
    { jobName: "Black mage", role: "DPS", sub_role: "magic", color: 'red', checked: true, info: "Using the void as a source for their powers, the black mage delivers devastating attacks with fire, and replenish their mana with ice spells. The black mage is not very mobile, but hits HARD." },
    { jobName: "Summoner", role: "DPS", sub_role: "magic", color: 'red', checked: true, info: "Channeling the essence of Ifrit, Garuda and Titan, the summoner can command the primals' powers to fight their enemies. To play summoner does not require much input and is easy job to play." },
    { jobName: "White mage", role: "healer", sub_role: "regen", color: 'green', checked: true, info: "The white mage is the most potent healer, using a cane and the elements of the forest. White mages have the ability to use regenerative healing." },
    { jobName: "Astrologian", role: "healer", sub_role: "regen", color: 'green', checked: true, info: "By reading the stars and using their powers, astrologians can heal their allies with regenerative effects. They also have a deck of tarot cards which they can use to buff other allies with." },
    { jobName: "Scholar", role: "healer", sub_role: "barrier", color: 'green', checked: true, info: "Using arcanima the scholars both heal and shield their allies. The scholar can also summon a fairy to help them with healing." },
    { jobName: "Sage", role: "healer", sub_role: "barrier", color: 'green', checked: true, info: "Masters of knowledge, the sage heals, protects and attacks with great effiency. The sage can cast barriers on their allies, and launch a stronger attack when that barrier breaks." },
  ];
  let jobNumber = null;
  let checkContent = [];
  const [filteredJobs, setFilteredJobs] = useState(jobs); /*prøv å sette opp en funksjon ved bruk av use state, en lagringsvariabel ( som blir oppdatert via funksjonen, og så setFilteredJobs for å ta fra lagringsvariablen inn i filteredJobs)*/
  let ofon = null;
  let msg = [
    'Go for',
    'Try out',
    'You should play as',
    'Time to go as',
    'Ready',
    'Duty commence',
    'Shine as a',
    "Let's go",
    'Your job is',
    'You are a',
    'Save us',
  ];
  let previousMsg = null;
  let displayMsg = null;
  let filteredJobsTemp = [];

  /*Filter functions*/
  const handleFilterData = (choice) => {
    console.log(choice)
    if (choice === 'tank') filterTank()
    if (choice === 'healer') filterHealer()
    if (choice === 'DPS') filterDPS()
    if (choice === 'regen') filterRegen()
    if (choice === 'barrier') filterBarrier()
    if (choice === 'melee') filterMelee()
    if (choice === 'range') filterRange()
    if (choice === 'magic') filterMagic()
  }

  const filterTank = () => {
    /*chat gpt idea*/
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));

      // The logic to update the jobs array based on the tank filter
      if (filteredJobs.length === 19) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].role !== 'tank') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs; // Return the updated state
      }
      else if (updatedJobs[0].checked && updatedJobs[1].checked && updatedJobs[2].checked && updatedJobs[3].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].role === 'tank') {
            updatedJobs[i].checked = false;
          }
        }
        return updatedJobs;
      }
      else {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].role === 'tank') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });


    //   /*easy write, if all is on*/
    //   if (filteredJobs.length === 19) {
    //     for (let i = 0; i < jobs.length; i++) {
    //       if (jobs[i].role !== 'tank') {
    //         jobs[i].checked = false;
    //       }
    //     }
    //   }
    //   /*if all the tank jobs are on*/
    //   else if (jobs[0].checked && jobs[1].checked && jobs[2].checked && jobs[3].checked) {
    //     for (let i = 0; i < jobs.length; i++) {
    //       if (jobs[i].role === 'tank') {
    //         jobs[i].checked = false;
    //       }
    //     }
    //   }
    //   /*for any other scenario... obviously*/
    //   else {
    //     for (let i = 0; i < jobs.length; i++) {
    //       if (jobs[i].role === 'tank') {
    //         jobs[i].checked = true;
    //       }
    //     }
    //   }
    filteredByJobs();
    console.log(filteredJobs)
    // }

  }


  const filterHealer = () => {
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));
      if (filteredJobs.length === 19) {
        // Your logic to update the jobs array based on the tank filter
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].role !== 'healer') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs;
      } // Return the updated state

      else if (updatedJobs[15].checked && updatedJobs[16].checked && updatedJobs[17].checked && updatedJobs[18].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].role === 'healer') {
            updatedJobs[i].checked = false
          }
        }
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (updatedJobs[i].role === 'healer') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });
    // if (filteredJobs.length === 19) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role !== 'healer') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else if (jobs[15].checked && jobs[16].checked && jobs[17].checked && jobs[18].checked) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role === 'healer') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role == 'healer') {
    //       jobs[i].checked = true;
    //     }
    //   }
    // }
    filteredByJobs();
    console.log(filteredJobs)
  }

  const filterDPS = () => {
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));
      if (filteredJobs.length === 19) {
        // Your logic to update the jobs array based on the tank filter
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].role !== 'DPS') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs;
      } // Return the updated state

      else if (updatedJobs[4].checked && updatedJobs[5].checked && updatedJobs[6].checked && updatedJobs[7].checked && updatedJobs[8].checked && updatedJobs[9].checked && updatedJobs[10].checked && updatedJobs[11].checked && updatedJobs[12].checked && updatedJobs[13].checked && updatedJobs[14].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].role === 'DPS') {
            updatedJobs[i].checked = false
          }
        }
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (updatedJobs[i].role === 'DPS') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });
    // if (filteredJobs.length === 19) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role !== 'DPS') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else if (jobs[4].checked && jobs[5].checked && jobs[6].checked && jobs[7].checked && jobs[8].checked && jobs[9].checked && jobs[10].checked && jobs[11].checked && jobs[12].checked && jobs[13].checked && jobs[14].checked) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role === 'DPS') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].role === 'DPS') {
    //       jobs[i].checked = true;
    //     }
    //   }
    // }
    filteredByJobs();
    console.log(filteredJobs);
  }

  const filterRegen = () => {
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));
      if (filteredJobs.length === 19) {
        // Your logic to update the jobs array based on the tank filter
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role !== 'regen') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs;
      } // Return the updated state

      else if (updatedJobs[15].checked && updatedJobs[16].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role === 'regen') {
            updatedJobs[i].checked = false
          }
        }
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (updatedJobs[i].sub_role === 'regen') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });
    // if (filteredJobs.length === 19) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role !== 'regen') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else if (jobs[15].checked && jobs[16].checked) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'regen') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'regen') {
    //       jobs[i].checked = true;
    //     }
    //   }
    // }
    filteredByJobs();
    console.log(filteredJobs);
  }

  const filterBarrier = () => {
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));
      if (filteredJobs.length === 19) {
        // Your logic to update the jobs array based on the tank filter
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role !== 'barrier') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs;
      } // Return the updated state

      else if (updatedJobs[17].checked && updatedJobs[18].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role === 'barrier') {
            updatedJobs[i].checked = false
          }
        }
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (updatedJobs[i].sub_role === 'barrier') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });
    // if (filteredJobs.length === 19) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role !== 'barrier') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else if (jobs[17].checked && jobs[18].checked) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'barrier') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'barrier') {
    //       jobs[i].checked = true;
    //     }
    //   }
    // }
    filteredByJobs();
    console.log(filteredJobs);
  }

  const filterMelee = () => {
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));
      if (filteredJobs.length === 19) {
        // Your logic to update the jobs array based on the tank filter
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role !== 'melee') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs;
      } // Return the updated state

      else if (updatedJobs[4].checked && updatedJobs[5].checked && updatedJobs[6].checked && updatedJobs[7].checked && updatedJobs[8].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role === 'melee') {
            updatedJobs[i].checked = false
          }
        }
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (updatedJobs[i].sub_role === 'melee') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });
    //   if (filteredJobs.length === 19) {
    //     for (let i = 0; i < jobs.length; i++) {
    //       if (jobs[i].sub_role !== 'melee') {
    //         jobs[i].checked = false;
    //       }
    //     }
    //   }
    //   else if (jobs[4].checked && jobs[5].checked && jobs[6].checked && jobs[7].checked && jobs[8].checked) {
    //     for (let i = 0; i < jobs.length; i++) {
    //       if (jobs[i].sub_role === 'melee') {
    //         jobs[i].checked = false;
    //       }
    //     }
    //   }
    //   else {
    //     for (let i = 0; i < jobs.length; i++) {
    //       if (jobs[i].sub_role === 'melee') {
    //         jobs[i].checked = true;
    //       }
    //     }
    //   }
    filteredByJobs();
    console.log(filteredJobs);
  }

  const filterRange = () => {
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));
      if (filteredJobs.length === 19) {
        // Your logic to update the jobs array based on the tank filter
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role !== 'range') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs;
      } // Return the updated state

      else if (updatedJobs[9].checked && updatedJobs[10].checked && updatedJobs[11].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role === 'range') {
            updatedJobs[i].checked = false
          }
        }
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (updatedJobs[i].sub_role === 'range') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });
    // if (filteredJobs.length === 19) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role !== 'range') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else if (jobs[9].checked && jobs[10].checked && jobs[11].checked) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'range') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'range') {
    //       jobs[i].checked = true;
    //     }
    //   }
    // }
    filteredByJobs();
    console.log(filteredJobs);
  }

  const filterMagic = () => {
    setFilteredJobs(prevJobs => {
      // Create a shallow copy of the previous state
      const updatedJobs = prevJobs.map(job => ({ ...job }));
      if (filteredJobs.length === 19) {
        // Your logic to update the jobs array based on the tank filter
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role !== 'magic') {
            updatedJobs[i].checked = false;
          }
        }

        return updatedJobs;
      } // Return the updated state

      else if (updatedJobs[12].checked && updatedJobs[13].checked && updatedJobs[14].checked) {
        for (let i = 0; i < updatedJobs.length; i++) {
          if (updatedJobs[i].sub_role === 'magic') {
            updatedJobs[i].checked = false
          }
        }
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (updatedJobs[i].sub_role === 'magic') {
            updatedJobs[i].checked = true;
          }
        }
        return updatedJobs;
      }
    });
    // if (filteredJobs.length === 19) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role !== 'magic') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else if (jobs[12].checked && jobs[13].checked && jobs[14].checked) {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'magic') {
    //       jobs[i].checked = false;
    //     }
    //   }
    // }
    // else {
    //   for (let i = 0; i < jobs.length; i++) {
    //     if (jobs[i].sub_role === 'magic') {
    //       jobs[i].checked = true;
    //     }
    //   }
    // }
    filteredByJobs();
    console.log(filteredJobs)
  }

  const filteredByJobs = () => {
    filteredJobsTemp = [];
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].checked === true) { filteredJobsTemp.push(jobs[i]) }
    }
    setFilteredJobs(filteredJobsTemp);
  }

  /*filter function for all toggling*/
  const toggleAllOn = () => {
    console.log('toggle all on pressed')
    for (let i = 0; i < jobs.length; i++) {
      jobs[i].checked = true;
    }
    filteredByJobs();
    console.log('this function done');
    console.log(filteredJobs);
  }

  const toggleAllOff = () => {
    console.log('toggle all off pressed')
    console.log(filteredJobs);
    for (let i = 0; i < jobs.length; i++) {
      jobs[i].checked = false;
    }
    filteredByJobs();
    console.log('this function did');
    console.log(filteredJobs);
  }

  useEffect(() => {
    console.log('effect used on' + filteredJobs)
  }, [filteredJobs]);

  return (
    <div className="App">
      {currentView === 'home' && <Home changeView={changeView} currentView={currentView} />}
      {currentView === 'filter' && <Filter handleFilterData={handleFilterData} shoutToggleAllOn={toggleAllOn} shoutToggleAllOff={toggleAllOff} changeView={changeView} currentView={currentView} jobs={jobs} filteredJobs={filteredJobs} />}
      {currentView === 'result' && <Result changeView={changeView} msg={msg} filteredJobs={filteredJobs} />}
    </div>
  );

}
export default App;
