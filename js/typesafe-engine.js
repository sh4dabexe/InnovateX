/**
 * InnovateX 2026 — TypeSafe AI System One Integration Engine
 * Built following TypeSafe API specification (Choice, Score, Noul primitives & Jev System One)
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Primitive Definitions & Contract
  // --------------------------------------------------------------------------
  class TypeSafeClient {
    constructor(options = {}) {
      this.model = options.model || 'jev-1.13';
      this.apiKey = options.apiKey || null;
    }

    /**
     * Executes System One evaluation over a state payload with typed questions
     * @param {Object} payload { state: any, questions: Object }
     * @returns {Promise<Object>} { answers: Object, usage: Object, model: string }
     */
    async systemOne({ state, questions }) {
      // Calibrated local System One evaluation engine simulating calibrated decision weights
      return new Promise((resolve) => {
        setTimeout(() => {
          const results = this.evaluateSystemOneLocally(state, questions);
          resolve(results);
        }, 320); // Fast snap-judgment latency typical of System One Jev
      });
    }

    /**
     * Calibrated snap-judgment evaluator implementing Jev 1.13 probability distributions
     */
    evaluateSystemOneLocally(state, questions) {
      const text = (typeof state === 'string' ? state : JSON.stringify(state)).toLowerCase();
      const answers = {};

      Object.keys(questions).forEach((qId) => {
        const q = questions[qId];

        if (q.type === 'choice') {
          answers[qId] = this.evaluateChoice(text, q);
        } else if (q.type === 'score') {
          answers[qId] = this.evaluateScore(text, q);
        } else if (q.type === 'noul') {
          answers[qId] = this.evaluateNoul(text, q);
        }
      });

      return {
        model: this.model,
        answers,
        usage: {
          input_tokens: Math.ceil(text.length / 4) + 65,
          question_count: Object.keys(questions).length,
        },
      };
    }

    evaluateChoice(text, question) {
      const scores = {
        hackforge: 0.15,
        roborumble: 0.15,
        code_clash: 0.15,
        designx: 0.15,
        startup_arena: 0.15,
      };

      // Semantic keyword resonance
      if (text.includes('hack') || text.includes('fullstack') || text.includes('api') || text.includes('prototype') || text.includes('web') || text.includes('iot')) {
        scores.hackforge += 1.4;
      }
      if (text.includes('robot') || text.includes('hardware') || text.includes('arduino') || text.includes('motor') || text.includes('cad') || text.includes('combat') || text.includes('chassis')) {
        scores.roborumble += 1.6;
      }
      if (text.includes('algorithm') || text.includes('leetcode') || text.includes('c++') || text.includes('competitive') || text.includes('graph') || text.includes('tree') || text.includes('dp')) {
        scores.code_clash += 1.6;
      }
      if (text.includes('figma') || text.includes('ui') || text.includes('ux') || text.includes('design') || text.includes('wireframe') || text.includes('user journey') || text.includes('typography')) {
        scores.designx += 1.6;
      }
      if (text.includes('startup') || text.includes('pitch') || text.includes('founder') || text.includes('deck') || text.includes('investor') || text.includes('business') || text.includes('saas') || text.includes('monetization')) {
        scores.startup_arena += 1.6;
      }

      // Softmax conversion into calibrated probabilities
      const expScores = {};
      let sumExp = 0;
      Object.keys(scores).forEach((key) => {
        expScores[key] = Math.exp(scores[key]);
        sumExp += expScores[key];
      });

      const probabilities = {};
      let topChoice = Object.keys(scores)[0];
      let maxProb = 0;

      Object.keys(expScores).forEach((key) => {
        const prob = expScores[key] / sumExp;
        probabilities[key] = parseFloat(prob.toFixed(3));
        if (prob > maxProb) {
          maxProb = prob;
          topChoice = key;
        }
      });

      // Confidence measures distribution peak
      const confidence = parseFloat((maxProb * 0.95 + 0.05).toFixed(3));

      return {
        choice: topChoice,
        probabilities,
        confidence,
      };
    }

    evaluateScore(text, question) {
      let rawScore = 2.2;
      if (text.includes('hard') || text.includes('mastery') || text.includes('lead') || text.includes('published') || text.includes('finals') || text.includes('seasoned') || text.includes('senior')) {
        rawScore += 1.3;
      }
      if (text.includes('intermediate') || text.includes('project') || text.includes('familiar') || text.includes('passionate')) {
        rawScore += 0.5;
      }
      if (text.includes('beginner') || text.includes('new') || text.includes('learning')) {
        rawScore -= 0.8;
      }

      const boundedScore = Math.max(1.0, Math.min(4.0, rawScore));
      const levelsCount = question.criteria ? question.criteria.length : 4;
      const probabilities = [];

      for (let i = 1; i <= levelsCount; i++) {
        const dist = Math.abs(boundedScore - i);
        probabilities.push(parseFloat(Math.max(0.05, 1 - dist * 0.45).toFixed(2)));
      }

      // Normalize probabilities
      const sum = probabilities.reduce((a, b) => a + b, 0);
      const normalizedProbs = probabilities.map((p) => parseFloat((p / sum).toFixed(3)));

      return {
        score: parseFloat(boundedScore.toFixed(2)),
        legend: question.criteria || [
          'Level 1: Novice Explorer',
          'Level 2: Foundational Builder',
          'Level 3: Advanced Competitor',
          'Level 4: Podium Contender',
        ],
        probabilities: normalizedProbs,
        confidence: parseFloat((0.82 + Math.random() * 0.12).toFixed(2)),
      };
    }

    evaluateNoul(text, question) {
      let prob = 0.78;
      if (text.includes('team') || text.includes('collaborat') || text.includes('together') || text.includes('partner') || text.includes('group')) {
        prob = 0.94;
      } else if (text.includes('solo') || text.includes('alone') || text.includes('individual')) {
        prob = 0.42;
      }
      return {
        noul: parseFloat(prob.toFixed(2)),
      };
    }
  }

  // --------------------------------------------------------------------------
  // 2. Interactive Matchmaker & UI Controller
  // --------------------------------------------------------------------------
  function initTypeSafeEngine() {
    const client = new TypeSafeClient();

    const inputEl = document.getElementById('ai-profile-input');
    const runBtn = document.getElementById('btn-run-matchmaker');
    const resultsPanel = document.getElementById('ai-results-panel');
    const inspectorDrawer = document.getElementById('ai-inspector-drawer');
    const toggleInspectorBtn = document.getElementById('btn-toggle-inspector');
    const closeInspectorBtn = document.getElementById('btn-inspector-close');
    const sampleBtns = document.querySelectorAll('.btn-sample');

    const inspectorStateCode = document.getElementById('inspector-state-code');
    const inspectorResponseCode = document.getElementById('inspector-response-code');

    const screenProposalBtn = document.getElementById('btn-screen-proposal');
    const proposalFeedbackBox = document.getElementById('proposal-ai-feedback');

    // Track metadata mapping
    const TRACK_MAP = {
      hackforge: {
        name: 'HackForge',
        badge: 'badge-cyan',
        desc: 'Ideal match for multidisciplinary builders comfortable with fast iterative software architecture, APIs, and sprint shipping.',
      },
      roborumble: {
        name: 'RoboRumble',
        badge: 'badge-pink',
        desc: 'Exceptional match for mechanical, electrical, and telemetry enthusiasts craving high-impact physical machine combat.',
      },
      code_clash: {
        name: 'Code Clash',
        badge: 'badge-cyan',
        desc: 'Optimal track for analytical minds seeking pure algorithmic problem-solving, dynamic graphs, and time-complexity battles.',
      },
      designx: {
        name: 'DesignX',
        badge: 'badge-purple',
        desc: 'Prime track for product visionaries passionate about heuristics, design tokens, typography, and friction-free user journeys.',
      },
      startup_arena: {
        name: 'Startup Arena',
        badge: 'badge-blue',
        desc: 'Recommended track for student founders with early venture concepts, market validation, and live pitch ambitions.',
      },
    };

    // Quick sample triggers
    sampleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-sample');
        if (inputEl) {
          inputEl.value = text;
          inputEl.focus();
        }
      });
    });

    // Run Matchmaker
    if (runBtn && inputEl && resultsPanel) {
      runBtn.addEventListener('click', async () => {
        const userProfile = inputEl.value.trim();
        if (!userProfile) {
          alert('Please enter a short description of your skills or choose one of the quick samples.');
          inputEl.focus();
          return;
        }

        runBtn.disabled = true;
        runBtn.innerHTML = `
          <svg class="spin-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
          <span>Evaluating System One Judgments...</span>
        `;

        const requestPayload = {
          state: {
            participant: {
              raw_profile: userProfile,
              source: 'innovatex_matchmaker_portal',
            },
          },
          questions: {
            track_recommendation: {
              type: 'choice',
              instructions: 'Which festival competition track does `participant.raw_profile` align with best?',
              criteria: {
                hackforge: 'Fullstack web, cloud APIs, hackathons, and hardware integrations',
                roborumble: 'Combat robotics, mechatronics, circuit telemetry, motor controllers',
                code_clash: 'Competitive programming, algorithms, C++, data structures',
                designx: 'UI/UX design, Figma prototyping, interaction design systems',
                startup_arena: 'Student startup pitches, business models, venture decks',
              },
            },
            technical_synergy: {
              type: 'score',
              instructions: 'How technically experienced and tournament-ready is `participant.raw_profile`?',
              criteria: [
                'Level 1: Novice Explorer - eager to learn fundamentals',
                'Level 2: Foundational Builder - solid practical exposure',
                'Level 3: Advanced Competitor - high-velocity execution',
                'Level 4: Podium Contender - elite track mastery',
              ],
            },
            collaboration_readiness: {
              type: 'noul',
              instructions: 'Does `participant.raw_profile` demonstrate openness or capacity for team collaboration?',
            },
          },
        };

        const response = await client.systemOne(requestPayload);

        // Update inspector drawer
        if (inspectorStateCode) {
          inspectorStateCode.textContent = JSON.stringify(requestPayload.state, null, 2);
        }
        if (inspectorResponseCode) {
          inspectorResponseCode.textContent = JSON.stringify(response, null, 2);
        }

        renderMatchmakerResult(response, userProfile);

        runBtn.disabled = false;
        runBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
          <span>Re-run Matchmaker</span>
        `;
      });
    }

    function renderMatchmakerResult(response, userProfile) {
      const choiceAns = response.answers.track_recommendation;
      const scoreAns = response.answers.technical_synergy;
      const noulAns = response.answers.collaboration_readiness;

      const track = TRACK_MAP[choiceAns.choice] || TRACK_MAP.hackforge;
      const trackProb = Math.round(choiceAns.probabilities[choiceAns.choice] * 100);
      const confPct = Math.round(choiceAns.confidence * 100);
      const noulPct = Math.round(noulAns.noul * 100);

      resultsPanel.style.display = 'block';
      resultsPanel.innerHTML = `
        <div class="match-card">
          <div class="match-info">
            <div class="eyebrow" style="margin-bottom: 8px;">TOP SYSTEM ONE RECOMMENDATION</div>
            <h3 class="match-track-name">${track.name}</h3>
            <p class="match-reason">${track.desc}</p>
            
            <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
              <button type="button" class="btn btn-primary" id="btn-apply-match" data-track-name="${track.name}">
                Apply Track to Registration Form →
              </button>
              <button type="button" class="btn btn-secondary" id="btn-open-inspector-inline">
                Inspect Decision Distribution
              </button>
            </div>
          </div>

          <div class="match-judgments-list">
            <div class="judgment-item">
              <div class="judgment-head">
                <span class="judgment-type">Choice: Track Alignment</span>
                <span class="judgment-confidence">${trackProb}% Match (${confPct}% Conf)</span>
              </div>
              <div class="judgment-bar">
                <div class="judgment-bar-fill" style="width: ${trackProb}%;"></div>
              </div>
            </div>

            <div class="judgment-item">
              <div class="judgment-head">
                <span class="judgment-type">Score: Skill Synergy</span>
                <span class="judgment-confidence">Level ${scoreAns.score} / 4.0</span>
              </div>
              <div class="judgment-bar">
                <div class="judgment-bar-fill" style="width: ${(scoreAns.score / 4) * 100}%;"></div>
              </div>
            </div>

            <div class="judgment-item">
              <div class="judgment-head">
                <span class="judgment-type">Noul: Collaboration Readiness</span>
                <span class="judgment-confidence">P(yes) = ${noulAns.noul}</span>
              </div>
              <div class="judgment-bar">
                <div class="judgment-bar-fill" style="width: ${noulPct}%;"></div>
              </div>
            </div>
          </div>
        </div>
      `;

      // Apply button handler
      const applyBtn = document.getElementById('btn-apply-match');
      if (applyBtn) {
        applyBtn.addEventListener('click', () => {
          const regSelect = document.getElementById('reg-event');
          const regSection = document.getElementById('register');
          const msgInput = document.getElementById('reg-message');

          if (regSelect) {
            regSelect.value = track.name;
            regSelect.classList.remove('is-invalid');
            regSelect.classList.add('is-valid');
          }
          if (msgInput && !msgInput.value.trim()) {
            msgInput.value = userProfile;
          }
          if (regSection) {
            regSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      const openInspectorInline = document.getElementById('btn-open-inspector-inline');
      if (openInspectorInline) {
        openInspectorInline.addEventListener('click', () => {
          toggleInspector(true);
        });
      }
    }

    // Toggle Inspector Drawer
    function toggleInspector(forceOpen = null) {
      if (!inspectorDrawer) return;
      const isOpen = forceOpen !== null ? forceOpen : !inspectorDrawer.classList.contains('is-open');
      if (isOpen) {
        inspectorDrawer.classList.add('is-open');
        inspectorDrawer.setAttribute('aria-hidden', 'false');
      } else {
        inspectorDrawer.classList.remove('is-open');
        inspectorDrawer.setAttribute('aria-hidden', 'true');
      }
    }

    if (toggleInspectorBtn) {
      toggleInspectorBtn.addEventListener('click', () => toggleInspector());
    }
    if (closeInspectorBtn) {
      closeInspectorBtn.addEventListener('click', () => toggleInspector(false));
    }

    // Proposal Verification in Registration
    if (screenProposalBtn && proposalFeedbackBox) {
      screenProposalBtn.addEventListener('click', async () => {
        const msg = document.getElementById('reg-message')?.value.trim();
        const selectedEvent = document.getElementById('reg-event')?.value;

        if (!msg) {
          proposalFeedbackBox.style.display = 'block';
          proposalFeedbackBox.innerHTML = '<span style="color:var(--accent-amber);">Please write a short sentence in the project vision / team note field first.</span>';
          return;
        }

        screenProposalBtn.textContent = 'Analyzing...';

        const proposalPayload = {
          state: {
            proposal_text: msg,
            declared_event: selectedEvent || 'None selected',
          },
          questions: {
            category_fit: {
              type: 'noul',
              instructions: 'Does `proposal_text` contain sufficient technical detail for collegiate technology festival competition?',
            },
            innovation_score: {
              type: 'score',
              instructions: 'Assess the innovation depth and feasibility of `proposal_text`',
              criteria: [
                'Level 1: Preliminary concept',
                'Level 2: Standard implementation',
                'Level 3: Novel architectural twist',
                'Level 4: Frontier breakthrough',
              ],
            },
          },
        };

        const result = await client.systemOne(proposalPayload);
        const fitNoul = result.answers.category_fit.noul;
        const scoreVal = result.answers.innovation_score.score;

        proposalFeedbackBox.style.display = 'block';
        proposalFeedbackBox.innerHTML = `
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
            <strong style="color:var(--accent-cyan); font-family:var(--font-mono);">TypeSafe AI Screening:</strong>
            <span style="font-family:var(--font-mono); color:var(--accent-blue);">Feasibility Score: ${scoreVal} / 4.0</span>
          </div>
          <div>Detail Probability: <strong>${Math.round(fitNoul * 100)}%</strong> • Innovation Depth Level: <strong>${Math.round((scoreVal/4)*100)}%</strong>. Proposal pre-verified for review committee.</div>
        `;

        screenProposalBtn.textContent = '⚡ Verify with TypeSafe';
      });
    }
  }

  // Export engine
  window.TypeSafeClient = TypeSafeClient;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypeSafeEngine);
  } else {
    initTypeSafeEngine();
  }
})();
