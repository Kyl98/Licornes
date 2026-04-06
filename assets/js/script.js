// ===============================================================================================================================================
// PAGE ACCUEIL PINATA /// PAGE ACCUEIL PINATA /// PAGE ACCUEIL PINATA /// PAGE ACCUEIL PINATA /// PAGE ACCUEIL PINATA /// PAGE ACCUEIL PINATA /// 
// ================================================================================================================================================

// ===============================================================================================================================
// PAGE REGLES /// PAGE REGLES /// PAGE REGLES /// PAGE REGLES /// PAGE REGLES /// PAGE REGLES /// PAGE REGLES /// PAGE REGLES ///
// ================================================================================================================================

// ===============================================================================================================================
// PAGE JEU /// PAGE JEU /// PAGE JEU /// PAGE JEU /// PAGE JEU /// PAGE JEU /// PAGE JEU /// PAGE JEU /// PAGE JEU /// PAGE JEU ///
// ================================================================================================================================

// --- SYSTÈME DE BADGES ---
const badgeData = [

        // ======================== BADGES CATEGORIE CoP ========================
        { id: 'first_kill', category: 'CoP', name: "Premier Sang", desc: "Vous avez éliminé votre première cible.", img: "../assets/images/star3.png" },
        { id: 'hit_all_classics', category: 'CoP', name: "Chasseur Complet", desc: "Toucher les 4 types de cibles classiques dans une partie.", img: "../assets/images/regular3.png" },
        { id: 'yami_hunter', category: 'CoP', name: "Yami !", desc: "A débusqué un Yami caché.", img: "../assets/images/yami3.png" },
        { id: 'hit_bomb', category: 'CoP', name: "Boum !", desc: "Toucher une bombe par erreur.", img: "../assets/images/Bomby3.png" },
        { id: 'hit_litimes', category: 'CoP', name: "Ouf j'ai encore du temps", desc: "Toucher un Litimes (Bonus de temps).", img: "../assets/images/clock3.png" },
        { id: 'ufo_slayer', category: 'CoP', name: "Menace Extraterrestre", desc: "Détruire l'OVNI secret.", img: "../assets/images/ovni3.png" },
        { id: 'lakitu_slayer', category: 'CoP', name: "Chasseur de Lakitu", desc: "Éliminer Lakitu dans une partie.", img: "../assets/images/Laki3.png" },
        { id: 'hit_evil_lakitu', category: 'CoP', name: "Justice", desc: "Éliminer un Evil Lakitu.", img: "../assets/images/Evil3.png" },
        { id: 'hit_boshi', category: 'CoP', name: "Grand Timide", desc: "Toucher Boshi.", img: "../assets/images/Boshi3.png" },
        { id: 'dog_lover', category: 'CoP', name: "Ami des Animaux", desc: "Cliquer sur le chien secret.", img: "../assets/images/Tokyo3.png" },
        { id: 'world_1_clear', category: 'CoP', name: "Explorateur des Plaines", desc: "Terminer avec succès le Monde 1.", img: "../assets/images/fusée3.png" },
        { id: 'settings_pro', category: 'CoP', name: "Curieux", desc: "Ouvrir le menu des paramètres avant de lancer une partie.", img: "../assets/images/gear3.png" },
        { id: 'rank_3', category: 'CoP', name: "Médaille de Bronze", desc: "Terminer à la 3ème place du classement.", img: "../assets/images/trophy3.png" },
        { id: 'score_1500', category: 'CoP', name: "Apprenti Tireur", desc: "Dépasser un score de 1 500 points.", img: "../assets/images/faceless3.png" },
        { id: 'trigger_happy', category: 'CoP', name: "Gâchette Facile", desc: "Cliquer plus de 100 fois dans une seule partie.", img: "../assets/images/cursor3.png" },
        
        // ======================== BADGES CATEGORIE SiV  ========================
        { id: 'peaceful', category: 'SiV', name: "Pacifiste", desc: "Ne rien toucher pendant les 10 premières secondes d'une partie.", img: "../assets/images/regular2.png" },
        { id: 'score_4500', category: 'SiV', name: "Score d'Argent", desc: "Atteindre un score de 4500 points.", img: "../assets/images/faceless2.png" },
        { id: 'ghost_touch', category: 'SiV', name: "Chasseur de Fantômes", desc: "Cliquer sur une cible en mode Fantôme (Ghost-mode).", img: "../assets/images/Evil2.png" },
        { id: 'pause_master', category: 'SiV', name: "Maître du Temps", desc: "Avoir utilisé la pause pour reprendre son souffle.", img: "../assets/images/clock2.png"},
        { id: 'rank_2', category: 'SiV', name: "Médaille d'Argent", desc: "Terminer à la 2ème place du classement.", img: "../assets/images/trophy2.png" },
        { id: 'world_2_clear', category: 'SiV', name: "Voyageur des Cieux", desc: "Terminer avec succès le Monde 2.", img: "../assets/images/cloudy2.png" },
        { id: 'super_combo', category: 'SiV', name: "Fureur de Vaincre", desc: "Maintenir un Super Combo pendant plus de 10 secondes.", img: "../assets/images/star2.png" },
        { id: 'combo_10', category: 'SiV', name: "Série de 10", desc: "Atteindre un combo de 10 sans rater.", img: "../assets/images/cursor2.png" },
        { id: 'yami_eye', category: 'SiV', name: "Oeil de Yami", desc: "Éliminer 20 Yami dans la même session.", img: "../assets/images/yami2.png" },
        { id: 'bomb_dodger', category: 'SiV', name: "Esquiveur", desc: "Finir une partie avec plus de 30 bombes ignorées.", img: "../assets/images/Bomby2.png" },
        { id: 'ufo_finder', category: 'SiV', name: "Observateur d'OVNI", desc: "Toucher l'OVNI 10 fois au total.", img: "../assets/images/ovni2.png" },
        { id: 'laki_expert', category: 'SiV', name: "Expert Lakitu", desc: "Toucher Lakitu 3 fois au total.", img: "../assets/images/Laki2.png" },
        { id: 'boshi_hunter', category: 'SiV', name: "Chasseur de Boshi", desc: "Toucher Boshi 15 fois au total.", img: "../assets/images/Boshi2.png" },
        { id: 'tokyo_visitor', category: 'SiV', name: "Visiteur de Tokyo", desc: "Cliquer sur le chien secret 3 fois.", img: "../assets/images/Tokyo2.png" },


        // ======================== BADGES CATEGORIE GoD =====================================================================================================================
        { id: 'score_10000', category: 'GoD', name: "Score d'Or", desc: "Atteindre un score de 10 000 points.", img: "../assets/images/faceless1.png" },
        { id: 'rank_1', category: 'GoD', name: "Médaille d'Or", desc: "Terminer à la 1ère place du classement.", img: "../assets/images/trophy1.png" },
        { id: 'world_3_clear', category: 'GoD', name: "Héros de l'Ombre", desc: "Terminer avec succès le Monde 3.", img: "../assets/images/fusée1.png" },
        { id: 'time_saver', category: 'GoD', name: "Juste à Temps", desc: "Récupérer un bonus de temps quand il reste moins de 3 secondes.", img: "../assets/images/star1.png" },
        { id: 'game_marathon', category: 'GoD', name: "Marathonien", desc: "Jouer plus de 10 parties au total.", img: "../assets/images/gear1.png" },
        { id: 'ultimate_clear', category: 'GoD', name: "Zéro Absolu", desc: "Terminer une partie avec exactement 0 point.", img: "../assets/images/cursor1.png" },
        { id: 'quad_kill', category: 'GoD', name: "Frénésie de Clics", desc: "Toucher 15 cibles en moins de 8 secondes.", img: "../assets/images/regular1.png" },
        { id: 'inverse_mode', category: 'GoD', name: "Allié des Nuages", desc: "A rallié Lakitu en complétant son mode fantôme.", img: "../assets/images/Laki1.png" },
        { id: 'cloud_slayer', category: 'GoD', name: "Exorciste Suprême", desc: "Éliminer 25 Evil Lakitu au total.", img: "../assets/images/cloudy1.png" },
        { id: 'god_slayer', category: 'GoD', name: "Tueur de Dieu", desc: "Vaincre l'Evil Lakitu Fantôme et obtenir l'immunité.", img: "../assets/images/Evil1.png" },
        { id: 'shadow_god', category: 'GoD', name: "Seigneur des Ombres", desc: "Cliquer sur 200 malus durant une seule partie.", img: "../assets/images/yami1.png" },
        { id: 'rocket_legend', category: 'GoD', name: "Démineur de l'Ombre", desc: "Toucher 10 rockets volontairement en une partie.", img: "../assets/images/Bomby1.png" },
        { id: 'time_master_3m', category: 'GoD', name: "Maître du Temps", desc: "Faire durer la partie pendant plus de 3 minutes.", img: "../assets/images/clock1.png" },
        { id: 'ufo_god', category: 'GoD', name: "As de l'Espace", desc: "Détruire l'OVNI 55 fois au total.", img: "../assets/images/ovni1.png" },
        { id: 'boshi_god', category: 'GoD', name: "Dieu Boshi", desc: "Toucher Boshi 100 fois au total.", img: "../assets/images/Boshi1.png" },
        { id: 'dog_god', category: 'GoD', name: "Dieu Canin", desc: "Cliquer sur les chiens secrets 20 fois.", img: "../assets/images/Tokyo1.png" },
];

function unlockBadge(badgeId) {
    let unlocked = JSON.parse(localStorage.getItem('unlockedBadges')) || [];
    if (unlocked.includes(badgeId)) return;

    unlocked.push(badgeId);
    localStorage.setItem('unlockedBadges', JSON.stringify(unlocked));

    // --- AJOUT POUR NOTIFICATION POINT ROUGE ---
    let news = JSON.parse(localStorage.getItem('newBadges')) || [];
    if (!news.includes(badgeId)) {
        news.push(badgeId);
        localStorage.setItem('newBadges', JSON.stringify(news));
    }

    const badge = badgeData.find(b => b.id === badgeId);
    if (!badge) return;

    // --- SON BADGE ---
    const sound = document.getElementById('badgeSound');
    if (sound) {
        sound.currentTime = 0; // Recommence au début si plusieurs badges pop
        sound.volume = localStorage.getItem('sfxVol') || 0.7;
        sound.play().catch(e => console.log("L'audio n'a pas pu être joué :", e));
    }

    const container = document.getElementById('badgeNotificationContainer');
    if (!container) return;

    const notif = document.createElement('div');
    notif.className = 'badge-notification';
    notif.innerHTML = `
        <div class="badge-icon-notify"><img src="${badge.img}" alt="Icon"></div>
        <div class="badge-info-notify">
            <p class="title-notif">Badge Débloqué !</p>
            <p class="name-notif">${badge.name}</p>
        </div>`;

    let duration = 2000; // Durée normale (3s)
    if (container.querySelectorAll('.badge-notification').length > 2) {
        duration = 1500; // Durée accélérée (1.5s) s'il y en a plus de 2
    }
    container.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 100);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 500);
    }, 2000);
}

     const stats = ['totalYami', 'totalBombsIgnored', 'totalUfos', 'totalLakis', 'totalBoshis', 'totalDogs'];
     stats.forEach(s => { if(!localStorage.getItem(s)) localStorage.setItem(s, 0); });

    // ================================================================================================================================================== 
    //  FIN DE LA SECTION BADGES /// FIN DE LA SECTION BADGES /// FIN DE LA SECTION BADGES /// FIN DE LA SECTION BADGES /// FIN DE LA SECTION BADGES ///
    // ==================================================================================================================================================

class UnicornShooter {
    constructor() {
        // --- Variables d'état ---
        this.score = 0;
        this.totalScore = 0;
        this.timeLeft = 60; 
        this.startTime = null; // AJOUTÉ pour le badge Maître du Temps
        this.isPlaying = false;
        this.isPaused = false;
        this.currentLevel = 1;
        this.difficultyMultiplier = 0.70; 
        this.spawnRate = 700; 
        this.pseudo = "JOUEUR";
        this.targets = []; 
        this.timerInterval = null;
        this.spawnTimeout = null;
        this.comboCount = 0;
        this.lastHitTime = 0;
        this.comboFreezeUntil = 0; 
        this.totalClicks = 0; 
        this.isInvulnerable = false; 
        this.godModeTimeout = null;

        // --- ÉTATS GHOST & INVERSE ---
        this.isInverseMode = false;
        this.inverseModeTimeout = null;

        // --- ÉTATS BOSHI & SUPER COMBO ---
        this.isSuperComboActive = false;
        this.superComboTimer = null;
        this.boshiUnlocked = false;

        // --- ÉTAT DÉCOMPTE FINAL ---
        this.isLowTimeActive = false;

        // --- Récupération des éléments HTML ---
        this.gameArea = document.getElementById('levelContainer');
        this.scoreElement = document.getElementById('scoreValue');
        this.timerElement = document.getElementById('timerValue');
        this.startMsg = document.getElementById('startMessage');
        this.welcomeOverlay = document.getElementById('welcomeOverlay');
        this.endOverlay = document.getElementById('endOverlay');
        this.nameInput = document.getElementById('playerNameInput');
        this.startBtn = document.getElementById('startGameBtn');
        this.pauseOverlay = document.getElementById('pauseOverlay');
        this.resumeBtn = document.getElementById('resumeBtn');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.quitBtn = document.getElementById('quitBtn');
        
        this.settingsOverlay = document.getElementById('settingsOverlay');
        this.musicSlider = document.getElementById('musicVolume');
        this.sfxSlider = document.getElementById('sfxVolume');
        this.closeSettingsBtn = document.getElementById('closeSettingsBtn');

        // --- Sons ---
        this.popSounds = [document.getElementById('popSound'), document.getElementById('popSoundTwo')];
        this.countDownSound = document.getElementById('countDownSound');
        this.resumeSound = document.getElementById('resumeSound');
        this.endLevelSound = document.getElementById('endLevelSound');
        this.bombSound = document.getElementById('bombSound'); 
        this.dogSound = document.getElementById('dogBarkSound'); 
        this.ufoSound = document.getElementById('ufoSound');
        this.evilSound = document.getElementById('evilPopSound');
        this.lakituSaveSound = document.getElementById('lakituSaveSound');
        this.lakituEvilSound = document.getElementById('lakituEvilSound');
        this.lakituHitSound = document.getElementById('lakituHitSound');
        this.starSound = document.getElementById('starSound');
        this.guhaSound = document.getElementById('guhaSound');
        this.boshiSound = document.getElementById('boshiSound');
        this.timerBeepSound = document.getElementById('timerBeepSound');
        this.kyuremSound = document.getElementById('kyuremSound');
        this.rocketSpawnSound = document.getElementById('rocketSpawnSound');
        this.rocketHitSound = document.getElementById('rocketHitSound');

        this.targetImages = [
            '../assets/images/Licornes-1.png', '../assets/images/Licornes-2.png',
            '../assets/images/Licornes-4.png', '../assets/images/Licornes-5.png'
        ];
      
        this.updateMusicElement();
        this.applyVolumes();
        this.setupWelcome();
        this.setupPause();
        this.setupKeyboard();
        this.setupSettings();
    }

    // --- MÉTHODES DE GESTION ---

    showTemporaryTimer(durationMs, color) {
        const oldTimer = document.getElementById('temp-game-timer');
        if (oldTimer) oldTimer.remove();

        const timerEl = document.createElement('div');
        timerEl.id = 'temp-game-timer';
        timerEl.style.cssText = `
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            font-size: 40px; font-weight: bold; color: ${color};
            text-shadow: 0 0 15px ${color}; z-index: 10002; pointer-events: none;
        `;
        document.body.appendChild(timerEl);

        let timeLeft = durationMs / 1000;
        timerEl.innerText = timeLeft + "s";

        const interval = setInterval(() => {
            timeLeft -= 1;
            timerEl.innerText = timeLeft + "s";
            if (timeLeft <= 0) { clearInterval(interval); timerEl.remove(); }
        }, 1000);
    }

    activateSuperCombo() {
        this.isSuperComboActive = true;
        if(typeof unlockBadge === 'function') unlockBadge('super_combo');
        if (this.superComboTimer) clearTimeout(this.superComboTimer);
        this.scoreElement.style.color = "#b300ff"; 
        this.superComboTimer = setTimeout(() => {
            this.isSuperComboActive = false;
            this.scoreElement.style.color = ""; 
        }, 5000);
    }

    applyVolumes() {
        const mVol = localStorage.getItem('musicVol') || 0.5;
        const sVol = localStorage.getItem('sfxVol') || 0.7;
        
        if (this.bgMusic) this.bgMusic.volume = mVol;
        if (this.musicSlider) this.musicSlider.value = mVol;
        if (this.sfxSlider) this.sfxSlider.value = sVol;

        const allSfx = [
            ...this.popSounds, this.countDownSound, this.resumeSound, this.endLevelSound,
            this.bombSound, this.dogSound, this.ufoSound, this.evilSound,
            this.lakituSaveSound, this.lakituEvilSound, this.lakituHitSound, 
            this.starSound, this.timerBeepSound, this.guhaSound, this.boshiSound, 
            this.rocketSpawnSound, this.rocketHitSound, this.kyuremSound
        ];
        allSfx.forEach(s => { if(s) s.volume = sVol; });
    }

    setupSettings() {
        if(this.settingsBtn) {
            this.settingsBtn.onclick = () => { 
                this.settingsOverlay.style.zIndex = "3000";
                this.settingsOverlay.style.display = 'flex';
                if(typeof unlockBadge === 'function') unlockBadge('settings_pro');
            };
        }
        if(this.closeSettingsBtn) {
            this.closeSettingsBtn.onclick = () => {
                localStorage.setItem('musicVol', this.musicSlider.value);
                localStorage.setItem('sfxVol', this.sfxSlider.value);
                this.applyVolumes();
                this.settingsOverlay.style.display = 'none';
            };
        }
    }

    updateMusicElement() {
        const ids = ['lvlMusicOne', 'lvlMusicTwo', 'lvlMusicThree'];
        this.bgMusic = document.getElementById(ids[this.currentLevel - 1]);
    } setupWelcome() {
        this.startBtn.onclick = () => {
            const val = this.nameInput.value.trim();
            if (val !== "") {
                this.pseudo = val.toUpperCase();
                this.welcomeOverlay.style.display = "none";
                
                let totalGames = parseInt(localStorage.getItem('totalGamesPlayed') || 0) + 1;
                localStorage.setItem('totalGamesPlayed', totalGames);

                this.initLevel(); 
            } else { alert("Entre un pseudo !"); }
        };
    }

    setupPause() {
        const pauseBtn = document.getElementById('pauseBtn');
        if (pauseBtn) {
            pauseBtn.onclick = () => {
                if (!this.isPlaying) return;
                if (this.isPaused) this.resumeWithCountdown();
                else this.togglePauseMenu(true);
            };
        }
        if (this.resumeBtn) this.resumeBtn.onclick = () => this.resumeWithCountdown();
        if (this.quitBtn) {
            this.quitBtn.onclick = () => { if (confirm("Quitter ?")) window.location.href = "../index.html"; };
        }
    }

    resumeWithCountdown() {
        if (!this.isPaused) return;
        this.pauseOverlay.style.display = 'none';
        this.startMsg.className = 'restart-countdown';
        this.startMsg.style.display = "block";
        this.startMsg.textContent = "Bien prêt(e) ??";
        
        if (this.resumeSound) { 
            this.resumeSound.currentTime = 0; 
            this.resumeSound.play(); 
        }

        setTimeout(() => { this.startMsg.textContent = "Go !!"; }, 1000);

        setTimeout(() => {
            this.startMsg.style.display = "none";
            this.togglePauseMenu(false);
        }, 1500);
    }

    setupKeyboard() {
        window.addEventListener('keydown', (e) => {
            if (this.endOverlay.style.display === "flex") {
                if (e.code === "Space" || e.code === "Enter") {
                    e.preventDefault();
                    if (this.currentLevel < 3) this.nextLevel();
                    else this.finishGame();
                }
                return;
            }

            if (!this.isPlaying) return;
            if (e.code === "Space" || e.code === "Escape") {
                e.preventDefault(); 
                if (this.isPaused) this.resumeWithCountdown();
                else this.togglePauseMenu(true);
            }
        });
    }

    togglePauseMenu(pauseActive) {
        const pauseBtn = document.getElementById('pauseBtn');
        this.isPaused = pauseActive;

        if (this.isPaused) {
            if (typeof unlockBadge === 'function') unlockBadge('pause_master');
            this.pauseOverlay.style.zIndex = "2000";
            this.pauseOverlay.style.display = 'flex';
            if (pauseBtn) pauseBtn.textContent = "▶";
            this.gameArea.style.pointerEvents = 'none';
            this.gameArea.style.filter = "blur(4px)";
            if (this.bgMusic) this.bgMusic.pause();
            if (this.timerBeepSound) this.timerBeepSound.pause();
            clearInterval(this.timerInterval);
            clearTimeout(this.spawnTimeout);
        } else {
            if (pauseBtn) pauseBtn.textContent = "⏸";
            this.gameArea.style.pointerEvents = 'auto';
            this.gameArea.style.filter = "none";
            if (this.bgMusic) this.bgMusic.play();
            if (this.isLowTimeActive && this.timerBeepSound) this.timerBeepSound.play();
            this.startTimer();
            this.spawnLoop();
        }
    }

    initLevel() {
        this.startMsg.className = 'start-message';
        this.startMsg.style.display = "block";
        this.startMsg.textContent = `Prêt ${this.pseudo} ?`;
        if (this.countDownSound) { this.countDownSound.currentTime = 0; this.countDownSound.play(); }
        
        setTimeout(() => { this.startMsg.textContent = "Attention..."; }, 1000);
        setTimeout(() => { 
            this.startMsg.textContent = "C'est parti !"; 
            if (this.bgMusic) { this.bgMusic.currentTime = 0; this.bgMusic.play(); }
            this.startTime = Date.now(); 
        }, 2000);
        setTimeout(() => {
            this.startMsg.style.display = "none";
            this.isPlaying = true;
            this.isPaused = false;
            this.startTimer();
            this.spawnLoop();
            this.update();

            setTimeout(() => {
                if (this.isPlaying && this.score === 0) {
                    if(typeof unlockBadge === 'function') unlockBadge('peaceful');
                }
            }, 10000);

        }, 3000);
    }

    checkTimeAlert() {
        if (this.timeLeft <= 12 && this.timeLeft > 0) {
            if (!this.isLowTimeActive) {
                this.isLowTimeActive = true;
                this.timerElement.classList.add('low-time-alert');
                if (this.timerBeepSound) {
                    this.timerBeepSound.currentTime = 0;
                    this.timerBeepSound.loop = true;
                    this.timerBeepSound.play().catch(e => console.log("Audio bloqué"));
                }
            }
        } else {
            if (this.isLowTimeActive) this.stopTimeAlert();
        }
    }

    stopTimeAlert() {
        this.isLowTimeActive = false;
        this.timerElement.classList.remove('low-time-alert');
        if (this.timerBeepSound) {
            this.timerBeepSound.pause();
            this.timerBeepSound.currentTime = 0;
        }
    }

    startTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            if (this.isPlaying && !this.isPaused) {
                this.timeLeft--;
                this.updateUI();
                this.checkTimeAlert();

                if (this.startTime) {
                    const elapsed = (Date.now() - this.startTime) / 1000;
                    if (elapsed >= 180 && typeof unlockBadge === 'function') {
                        unlockBadge('time_master_3m');
                    }
                }

                if (this.timeLeft <= 0) this.endGame();
            }
        }, 1000);
    }

    updateUI() {
        const mins = Math.floor(this.timeLeft / 60);
        const secs = this.timeLeft % 60;
        this.timerElement.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        this.scoreElement.textContent = this.score;
    }

    spawnLoop() {
       if (this.isPlaying && !this.isPaused) {
            let img;
            let rand = Math.random();

            if (rand < 0.008) { 
                img = '../assets/images/Kyurem.gif';
            } else if (rand < 0.02) {
                img = '../assets/images/Chien.gif'; 
            } else if (rand < 0.07) { 
                img = '../assets/images/Litimes.gif'; 
            } else if (rand < 0.10) { 
                img = '../assets/images/Rocket.gif';
            } else if (rand < 0.13) { 
                img = '../assets/images/OVNI.gif';
            } else if (this.currentLevel >= 2 && rand < 0.16) {
                img = '../assets/images/Lakitu.gif';
            } else if (this.currentLevel >= 2 && rand < 0.18) {
                img = '../assets/images/Evil_Lakitu.gif';
            } else if (rand < (0.25 + (this.currentLevel * 0.03))) {
                img = Math.random() > 0.5 ? '../assets/images/Bomb.gif' : '../assets/images/Licornes-3.png';
            } else {
                if (this.boshiUnlocked && Math.random() < 0.15) {
                    img = '../assets/images/Boshi.png';
                } else {
                    img = this.targetImages[Math.floor(Math.random() * this.targetImages.length)];
                }
            }
            this.targets.push(new Target(img, this));
        }
        const levelFactor = 1 + (this.currentLevel - 1) * 0.2;
        const nextSpawn = (this.spawnRate / levelFactor) + Math.random() * 800;
        this.spawnTimeout = setTimeout(() => this.spawnLoop(), nextSpawn);
    }

    update() {
        if (this.isPlaying && !this.isPaused) {
            this.targets.forEach((target, index) => {
                target.move();
                if (target.y > window.innerHeight + 100 || target.y < -200 || target.x > window.innerWidth + 300 || target.x < -300) {
                    if (target.y > window.innerHeight + 100 && target.isBomb) {
                        let totalIgnored = parseInt(localStorage.getItem('totalBombsIgnored') || 0) + 1;
                        localStorage.setItem('totalBombsIgnored', totalIgnored);
                        if (totalIgnored >= 30 && typeof unlockBadge === 'function') {
                            unlockBadge('bomb_dodger');
                        }
                    }
                    target.remove();
                    this.targets.splice(index, 1);
                }
            });
        }
        requestAnimationFrame(() => this.update());
    }

    fadeOutAndStopMusic() {
        if (!this.bgMusic) return;
        let currentAudio = this.bgMusic;
        let fadeOut = setInterval(() => {
            if (currentAudio.volume > 0.05) currentAudio.volume -= 0.05;
            else { currentAudio.pause(); currentAudio.currentTime = 0; clearInterval(fadeOut); }
        }, 100); 
    }

    endGame() {
        this.isPlaying = false;
        clearInterval(this.timerInterval);
        clearTimeout(this.spawnTimeout);
        this.stopTimeAlert();

        if(typeof unlockBadge === 'function') {
            if (this.currentLevel === 1) unlockBadge('world_1_clear');
            if (this.currentLevel === 2) unlockBadge('world_2_clear');
            if (this.currentLevel === 3) unlockBadge('world_3_clear');
            if (this.score >= 1500) unlockBadge('score_1500');
            if (this.score >= 6500) unlockBadge('score_6500');
            if (this.score >= 10000) unlockBadge('score_10000');
            if (this.score === 0) unlockBadge('ultimate_clear');
        }

        if (this.endLevelSound) { this.endLevelSound.currentTime = 0; this.endLevelSound.play(); }
        this.fadeOutAndStopMusic();
        this.totalScore += this.score;
        document.getElementById('finalScore').textContent = this.score;
        this.endOverlay.style.display = "flex";

        const commentElement = document.getElementById('endComment');
        if (this.score === 0) commentElement.textContent = "Tu as dormi ???";
        else if (this.score < 1200) commentElement.textContent = "Pas ouf, tout ça...";
        else if (this.score < 3000) commentElement.textContent = "Mouais pas trop mal...";
        else if (this.score < 6500) commentElement.textContent = "Je dirai pas que t'es meilleur mais tu progresses...";
        else if (this.score < 9999) commentElement.textContent = "Mais c'est que tu commences à devenir bon dis moi !";
        else commentElement.textContent = "Nan t'es bon, t'es bon GG !!";

        const continueBtn = document.querySelector('.click-to-continue');
        if (continueBtn) {
            continueBtn.onclick = (e) => {
                e.stopPropagation();
                if (this.currentLevel < 3) this.nextLevel();
                else this.finishGame();
            };
        }
    }

    nextLevel() {
        this.currentLevel++;
        this.updateMusicElement();
        this.applyVolumes();
        this.boshiUnlocked = false; 
        document.body.className = `world_${this.currentLevel}`;
        document.querySelector('.current-level').textContent = `Level ${this.currentLevel}`;
        this.endOverlay.style.display = "none";
        this.score = 0;
        this.timeLeft = 60;
        this.updateUI();
        this.gameArea.innerHTML = "";
        this.targets = [];
        this.initLevel();
    }

    finishGame() { 
        let leaderboard = JSON.parse(localStorage.getItem('unicornLeaderboard')) || [];
        const newEntry = { name: this.pseudo, score: this.totalScore };
        leaderboard.push(newEntry);
        leaderboard.sort((a, b) => b.score - a.score);
        const playerRank = leaderboard.findIndex(e => e.name === this.pseudo && e.score === this.totalScore) + 1;
        
        if(typeof unlockBadge === 'function') {
            if (playerRank === 1) unlockBadge('rank_1');
            if (playerRank === 2) unlockBadge('rank_2');
            if (playerRank === 3) unlockBadge('rank_3');
        }

        leaderboard = leaderboard.slice(0, 15);
        localStorage.setItem('unicornLeaderboard', JSON.stringify(leaderboard));
        localStorage.setItem('lastFinalScore', this.totalScore);
        localStorage.setItem('lastPlayerName', this.pseudo);
        window.location.href = "scores.html"; 
    }
}
// ===================================================================================================================================================================
// ===================================================================================================================================================================

class Target {
    constructor(imgSrc, game, isDropped = false) {
        this.game = game;
        this.element = document.createElement('img');
        this.element.src = imgSrc;
        this.element.className = 'targets';
        
        this.isBomb = imgSrc.includes('Bomb.gif');
        this.isDog = imgSrc.includes('Chien.gif');
        this.isKyurem = imgSrc.includes('Kyurem.gif');
        this.isUFO = imgSrc.includes('OVNI.gif');
        this.isRocket = imgSrc.includes('Rocket.gif');
        this.isEvilLicorne = imgSrc.includes('Licornes-3.png');
        this.isLakitu = imgSrc.includes('Lakitu.gif') && !imgSrc.includes('Evil');
        this.isEvilLakitu = imgSrc.includes('Evil_Lakitu.gif');
        this.isStarUnicorn = imgSrc.includes('Litimes.gif');
        this.isBoshi = imgSrc.includes('Boshi.png');

        if (this.isBomb) this.element.classList.add('bomb-target');
        if (this.isDog) this.element.classList.add('dog-target');
        if (this.isKyurem) this.element.classList.add('kyurem-target');
        if (this.isUFO) this.element.classList.add('ufo-target');
        if (this.isRocket) this.element.classList.add('rocket-target');
        if (this.isEvilLicorne) this.element.classList.add('evil-target');
        if (this.isLakitu) this.element.classList.add('lakitu-target');
        if (this.isEvilLakitu) this.element.classList.add('evil-lakitu-target');
        if (this.isStarUnicorn) this.element.classList.add('star-target');
        if (this.isBoshi) this.element.classList.add('boshi-target');

        if (this.isLakitu || this.isEvilLakitu) {
            this.element.style.width = "90px";
            this.element.style.height = "auto";
        }
        if (this.isBoshi) {
            this.element.style.height = "auto";
        }

        this.dropTimer = 0;
        if (this.isLakitu && !this.isEvilLakitu) {
            this.hp = 3; 
        } else {
            this.hp = 1; 
        }

        this.element.onmousedown = (e) => { 
            e.preventDefault(); 
            if (!this.game.isPaused && this.game.isPlaying) {
                // Pour le badge Peaceful
                this.game.isPeaceful = false;

                if (this.element.classList.contains('ghost-mode')) {
                    this.explode();
                    return;
                }

                this.hp--;
                
                if (this.isLakitu && !this.isEvilLakitu && this.hp > 0) {
                    this.showFloatingText(`${3 - this.hp}/3`, e.clientX, e.clientY, false, "#00FF00");
                }

                if (this.hp <= 0) {
                    this.explode();
                } else {
                    if (this.isLakitu && !this.isEvilLakitu) {
                        if (this.game.lakituHitSound) { this.game.lakituHitSound.currentTime = 0; this.game.lakituHitSound.play(); }
                        this.element.style.filter = "brightness(2) contrast(2)";
                        this.element.classList.add('hit-shake');
                        setTimeout(() => { this.element.style.filter = ""; this.element.classList.remove('hit-shake'); }, 150);
                    }
                }
            }
        };

        const mult = this.game.difficultyMultiplier;
        const levelSlowdown = 1 + (this.game.currentLevel - 1) * 0.15;

        if (this.isStarUnicorn) {
            if (this.game.starSound) { 
                this.game.starSound.currentTime = 0; 
                this.game.starSound.play(); 
            }
            this.side = Math.random() > 0.5 ? 'left' : 'right';
            this.x = this.side === 'left' ? -150 : window.innerWidth + 150;
            this.y = Math.random() * (window.innerHeight * 0.4);
            let speed = 10.0; 
            this.vx = this.side === 'left' ? (speed * mult) : -(speed * mult);
            this.vy = 0;
            this.gravity = 0;
            this.rotationSpeed = 10; 
        } 
        else if (isDropped) {
            this.gravity = 0.015 * mult; 
            this.vx = (Math.random() - 0.5) * 0.8 * mult; 
            this.vy = 0.25 * mult;
            this.x = 0; 
            this.y = 0;
            this.rotationSpeed = (Math.random() - 0.5) * 1;
        } 
        else if (this.isUFO || this.isLakitu || this.isEvilLakitu || this.isRocket) {
            if (this.isRocket && this.game.rocketSpawnSound) {
                this.game.rocketSpawnSound.currentTime = 0;
                this.game.rocketSpawnSound.play();
            }

            this.side = Math.random() > 0.5 ? 'left' : 'right';
            this.x = this.side === 'left' ? -150 : window.innerWidth + 150;
            this.y = Math.random() * (window.innerHeight * 0.3);
            
            let horizontalSpeed = this.isRocket ? 7 : 2.5;
            this.vx = this.side === 'left' ? (horizontalSpeed * mult) : -(horizontalSpeed * mult);
            
            this.vy = 0;
            this.gravity = 0;
            this.rotationSpeed = 0;

            if (this.isRocket) {
                if (this.side === 'left') {
                    this.element.className = 'targets rocket-right';
                } else {
                    this.element.className = 'targets rocket-left';
                }
            }
        }
        else {
            this.x = Math.random() * (window.innerWidth - 270);
            this.y = window.innerHeight;
            this.gravity = 0.012 * mult * levelSlowdown; 
            this.vy = -(4.0 + Math.random() * 1.5) * mult; 
            this.vx = (Math.random() - 0.5) * 1.2 * mult;
            this.rotationSpeed = (Math.random() - 0.5) * 2;
        }

        this.rotation = 0;
        this.game.gameArea.appendChild(this.element);
    }

    move() {
        this.vy += this.gravity; 
        this.x += this.vx; 
        this.y += this.vy; 
        
        this.element.style.left = `${this.x}px`; 
        this.element.style.top = `${this.y}px`;

        if (this.isRocket) {
            return; 
        } 
        else if (this.rotationSpeed !== 0) {
            this.rotation += this.rotationSpeed;
            this.element.style.transform = `rotate(${this.rotation}deg)`;
        }

        if (this.isLakitu || this.isEvilLakitu) {
            this.dropTimer++;
            if (this.dropTimer > 250) { this.dropItem(); this.dropTimer = 0; }
        }
    }

    dropItem() {
        let img = this.isLakitu ? '../assets/images/Boshi.png' : '../assets/images/Bomb.gif';
        const d = new Target(img, this.game, true);
        d.x = this.x + 40; d.y = this.y + 40;
        this.game.targets.push(d);
    } 
    
    explode() {
    this.game.totalClicks++;
    if (this.game.totalClicks >= 100 && typeof unlockBadge === 'function') {
        unlockBadge('trigger_happy');
    }

    let gamesPlayed = parseInt(localStorage.getItem('totalGamesPlayed') || 0);
    if (gamesPlayed >= 10) unlockBadge('game_marathon');

    if (!this.game.killWindow) this.game.killWindow = [];
    const now = Date.now();
    this.game.killWindow.push(now);
    this.game.killWindow = this.game.killWindow.filter(t => now - t < 8000);
    if (this.game.killWindow.length >= 15) unlockBadge('quad_kill');

    const rect = this.element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const isGodMode = this.game.isInvulnerable;

    if (this.element.classList.contains('ghost-mode')) {
        this.ghostClicks = (this.ghostClicks || 0) + 1;

        if (this.game.startTime) {
            const playDuration = (Date.now() - this.game.startTime) / 1000;
            if (playDuration >= 180) unlockBadge('time_master_3m');
        }
        
        if (this.game.lakituHitSound) { 
            this.game.lakituHitSound.currentTime = 0; 
            this.game.lakituHitSound.play(); 
        }

        if (this.isLakitu && !this.isEvilLakitu) {
            this.game.score += 100;
            this.showFloatingText("+100", rect.left, rect.top - 30, false, "#00FF00");

            const classicFlash = document.createElement('div');
            classicFlash.className = 'classic-flash-overlay'; 
            document.body.appendChild(classicFlash);
            setTimeout(() => classicFlash.remove(), 800);

            this.showFloatingText(`${this.ghostClicks}/8`, centerX, centerY, false, "#ffffff");

            if (this.ghostClicks === 8) {
                this.dropTimer = -999999; 
                if(typeof unlockBadge === 'function') {
                    unlockBadge('SiV'); 
                    unlockBadge('inverse_mode');
                }
                
                this.game.timeLeft += 8; 
                this.game.isInverseMode = true;
                document.body.style.boxShadow = "inset 0 0 100px rgba(0, 255, 0, 0.5)";
                this.showFloatingText("+8s & MODE INVERSE CUMULÉ !", rect.left, rect.top, false, "#00FF00");

                if (this.game.inverseModeTimeout) clearTimeout(this.game.inverseModeTimeout);
                this.game.inverseModeTimeout = setTimeout(() => { 
                    this.game.isInverseMode = false; 
                    document.body.style.boxShadow = ""; 
                    this.game.inverseModeTimeout = null;
                }, 8000);

                this.game.targets.forEach(t => { 
                    if (t.isBoshi || t.isDog || t.isStarUnicorn) t.remove(); 
                });
                this.remove();
            }
        } 
        else if (this.isEvilLakitu) {
            if (isGodMode) {
                this.game.score += 100;
                this.showFloatingText("+100", rect.left, rect.top - 30, false, "#00FF00");
                if (this.game.godModeTimeout) clearTimeout(this.game.godModeTimeout);
                this.game.godModeTimeout = setTimeout(() => {
                    this.game.isInvulnerable = false;
                    this.game.scoreElement.style.textShadow = "";
                    document.body.style.boxShadow = "";
                }, 15000); 
            } else {
                this.game.score = Math.max(0, this.game.score - 100);
                this.showFloatingText("-100", rect.left, rect.top - 30, true, "#ff0000");
                const darkFlash = document.createElement('div');
                darkFlash.className = 'evil-flash-overlay';
                document.body.appendChild(darkFlash);
                setTimeout(() => darkFlash.remove(), 800);
            }

            this.showFloatingText(`${this.ghostClicks}/??`, centerX, centerY, false, "#ffffff");

            if (this.ghostClicks === 10) {
                this.dropTimer = -999999;
                if (this.game.lakituEvilSound) { 
                    this.game.lakituEvilSound.currentTime = 0; 
                    this.game.lakituEvilSound.play(); 
                }
                
                let cloudCount = parseInt(localStorage.getItem('totalCloudsHit') || 0) + 1;
                localStorage.setItem('totalCloudsHit', cloudCount);
                if (cloudCount >= 25 && typeof unlockBadge === 'function') unlockBadge('cloud_slayer');

                this.game.score += 2500; 
                this.game.timeLeft += 15; 
                document.body.style.boxShadow = "inset 0 0 100px rgba(255, 0, 0, 0.7)";
                this.game.isInvulnerable = true;
                this.game.scoreElement.style.textShadow = "0 0 20px #ff0000";
                this.showFloatingText("+2500 PTS & IMMUNITÉ (15s)!", centerX, centerY, false, "#ff0000");

                if (this.game.godModeTimeout) clearTimeout(this.game.godModeTimeout);
                this.game.godModeTimeout = setTimeout(() => { 
                    this.game.isInvulnerable = false; 
                    this.game.scoreElement.style.textShadow = ""; 
                    document.body.style.boxShadow = ""; 
                }, 15000);

                if(typeof unlockBadge === 'function') { 
                    unlockBadge('god_slayer'); 
                    unlockBadge('ghost_touch'); 
                }
                this.game.targets.forEach(t => t.convertToMalus());
                this.remove();
            }
        }
        return; 
    }

    if (this.isKyurem || this.isBomb || this.isEvilLicorne || this.isRocket || this.isEvilLakitu ) {
        this.game.sessionMalusHits = (this.game.sessionMalusHits || 0) + 1;
        if (this.game.sessionMalusHits >= 200 && typeof unlockBadge === 'function') unlockBadge('shadow_god');
    }

    if (this.isKyurem) {
        if (this.game.kyuremSound) { this.game.kyuremSound.currentTime = 0; this.game.kyuremSound.play(); }
        
        let dogCount = parseInt(localStorage.getItem('totalDogsCount') || 0) + 1;
        localStorage.setItem('totalDogsCount', dogCount);
        if (dogCount >= 7) unlockBadge('tokyo_visitor');
        if (dogCount >= 20 && typeof unlockBadge === 'function') unlockBadge('dog_god');

        if (isGodMode || this.game.isInverseMode) {
            this.game.score += 900;
            this.showFloatingText("+1500 PTS!", centerX, centerY, false, "#00FF00");
        } else {
            this.game.score = Math.max(0, this.game.score - 900);
            this.game.comboCount = 0;
            this.showFloatingText("-1500 DARKNESS!", centerX, centerY, true, "#ff0000");
            const dark = document.createElement('div');
            dark.className = 'darkness-overlay';
            document.body.appendChild(dark);
            setTimeout(() => { dark.style.opacity = "0"; setTimeout(() => dark.remove(), 1000); }, 2000);
        }
        this.createParticles(centerX, centerY, "black");
        this.remove();
        return;
    }
    else if (this.isBomb) {
        if (isGodMode || this.game.isInverseMode) {
            this.game.score += 320;
            this.showFloatingText("+320 PTS!", centerX, centerY, false, "#00FF00");
            this.createParticles(centerX, centerY, "gold");
        } else {
            if (this.game.bombSound) { this.game.bombSound.currentTime = 0; this.game.bombSound.play(); }
            document.body.classList.add('screen-shake');
            setTimeout(() => document.body.classList.remove('screen-shake'), 500);
            this.game.score = Math.max(0, this.game.score - 320); 
            this.game.comboCount = 0;
            this.showFloatingText("BOMBY -320!!", centerX, centerY, true);
            this.createParticles(centerX, centerY, "black");
            if(typeof unlockBadge === 'function') unlockBadge('hit_bomb');
        }
        this.remove();
    }
    else if (this.isEvilLicorne) {
        if (isGodMode || this.game.isInverseMode) {
            this.game.score += 250;
            this.showFloatingText("+250 PTS!", centerX, centerY, false, "#00FF00");
            this.createParticles(centerX, centerY, "gold");
        } else {
            if (this.game.evilSound) { this.game.evilSound.currentTime = 0; this.game.evilSound.play(); }
            this.game.score = Math.max(0, this.game.score - 250); 
            this.game.comboCount = 0;
            this.showFloatingText("CHEH -250!", centerX, centerY, true);
            this.createParticles(centerX, centerY, "evil");
            if(typeof unlockBadge === 'function') {
                let count = parseInt(localStorage.getItem('totalYami') || 0) + 1;
                localStorage.setItem('totalYami', count);
                if (count >= 20) unlockBadge('yami_eye');
                unlockBadge('yami_hunter');
            }
        }
        this.remove(); 
    }
    else if (this.isStarUnicorn) {
        if (this.game.guhaSound) { this.game.guhaSound.currentTime = 0; this.game.guhaSound.play(); }
        if (this.game.timeLeft < 3 && typeof unlockBadge === 'function') unlockBadge('time_saver');
        
        this.game.timeLeft += 10; 
        this.game.score += 120;
        this.showFloatingText("TIME BONUS +10s!", centerX, centerY, false, "#FFD700");
        this.createParticles(centerX, centerY, "#FFD700");
        this.game.checkTimeAlert(); 
        if(typeof unlockBadge === 'function') unlockBadge('hit_litimes');
        this.remove();
    }
    else if (this.isBoshi) {
        if (this.game.boshiSound) { this.game.boshiSound.currentTime = 0; this.game.boshiSound.play(); }
        this.game.score += 90;
        this.game.activateSuperCombo();
        this.showFloatingText("SUPER BOSHI!", centerX, centerY, false, "#0077ff");
        this.createParticles(centerX, centerY, "#0077ff");
        
        if(typeof unlockBadge === 'function') {
            unlockBadge('hit_boshi');
            let count = parseInt(localStorage.getItem('totalBoshisCount') || 0) + 1;
            localStorage.setItem('totalBoshisCount', count);
            if (count >= 50) unlockBadge('boshi_hunter');
            if (count >= 100) unlockBadge('boshi_god');
        }
        this.remove();
    }
    else if (this.isLakitu) {
        if (this.game.lakituSaveSound) { this.game.lakituSaveSound.currentTime = 0; this.game.lakituSaveSound.play(); }
        this.game.score += 480; 
        this.game.boshiUnlocked = true;
        this.showFloatingText("LAKITU LOOT!", centerX, centerY, false, "#00FF00");
        this.createParticles(centerX, centerY, "#FFFFFF");
        this.spawnLoot('../assets/images/Boshi.png', centerX, centerY);
        this.spawnLoot('../assets/images/Boshi.png', centerX, centerY);
        this.spawnLoot(this.game.targetImages[0], centerX, centerY);
        this.spawnLoot(this.game.targetImages[1], centerX, centerY);
        this.spawnLoot('../assets/images/Chien.gif', centerX, centerY);
        this.game.targets.forEach(t => { if(t.isBomb) t.convertToBonus(); });
        
        if(typeof unlockBadge === 'function') {
            let count = parseInt(localStorage.getItem('totalCloudsHit') || 0) + 1;
            localStorage.setItem('totalCloudsHit', count);
            if (count >= 7) unlockBadge('laki_expert');
            unlockBadge('lakitu_slayer');
        }
        this.element.classList.add('is-exploding'); 
        this.hp = Infinity; 
        setTimeout(() => {
            this.element.classList.remove('is-exploding');
            this.element.style.pointerEvents = 'auto'; 
            this.hp = 1; 
            this.element.classList.add('ghost-mode');
        }, 600);
        setTimeout(() => this.remove(), 30000); 
    }
    else if (this.isEvilLakitu) {
        if (this.game.lakituEvilSound) { this.game.lakituEvilSound.currentTime = 0; this.game.lakituEvilSound.play(); }
        this.game.score = Math.max(0, this.game.score - 550);
        this.showFloatingText("CHAOS & BOMBS!", centerX, centerY, true, "#FF0000");
        this.createParticles(centerX, centerY, "evil");
        if(typeof unlockBadge === 'function') unlockBadge('hit_evil_lakitu');
        this.spawnLoot('../assets/images/Kyurem.gif', centerX, centerY);
        this.game.targets.forEach(t => t.convertToMalus());
        for(let i=0; i<3; i++) this.game.targets.push(new Target('../assets/images/Licornes-3.png', this.game));
        this.element.classList.add('is-exploding');
        this.hp = Infinity; 
        setTimeout(() => {
            this.element.classList.remove('is-exploding');
            this.element.style.pointerEvents = 'auto'; 
            this.hp = 1; 
            this.element.classList.add('ghost-mode');
        }, 600);
        setTimeout(() => this.remove(), 30000);
    }
    else if (this.isDog) {
        if (this.game.dogSound) { this.game.dogSound.currentTime = 0; this.game.dogSound.play(); }
        this.game.score += 1000;
        this.showFloatingText("EASTER EGG +1000!", centerX, centerY, false, "#00FF00");
        this.createParticles(centerX, centerY, "#00FF00");
        
        if(typeof unlockBadge === 'function') {
            unlockBadge('dog_lover');
            let dogCount = parseInt(localStorage.getItem('totalDogsCount') || 0) + 1;
            localStorage.setItem('totalDogsCount', dogCount);
            if (dogCount >= 7) unlockBadge('tokyo_visitor');
            if (dogCount >= 20) unlockBadge('dog_god');
        }
        this.remove();
    }
    else if (this.isUFO) {
        if (this.game.ufoSound) { this.game.ufoSound.currentTime = 0; this.game.ufoSound.play(); }
        this.game.score += 180;
        this.showFloatingText("UFO +180!", centerX, centerY, false, "#00FFFF");
        this.createParticles(centerX, centerY, "ufo");
        
        if(typeof unlockBadge === 'function') {
            unlockBadge('ufo_slayer');
            let count = parseInt(localStorage.getItem('totalUfoCount') || 0) + 1;
            localStorage.setItem('totalUfoCount', count);
            if (count >= 20) unlockBadge('ufo_finder');
            if (count >= 55) unlockBadge('ufo_god');
        }
        this.remove();
    }
    else if (this.isRocket) {
        if (this.game.rocketHitSound) { 
            this.game.rocketHitSound.currentTime = 0; 
            this.game.rocketHitSound.play(); 
        }
        this.game.sessionRockets = (this.game.sessionRockets || 0) + 1;
        if (this.game.sessionRockets >= 10 && typeof unlockBadge === 'function') unlockBadge('rocket_legend');

        if (isGodMode || this.game.isInverseMode) {
            this.game.score += 450;
            this.showFloatingText("+450 PTS!", centerX, centerY, false, "#00FF00");
            this.createParticles(centerX, centerY, "#00FF00");
        } else {
            this.game.score = Math.max(0, this.game.score - 450);
            this.game.comboCount = 0;
            this.showFloatingText("ROCKET CRASH -450!", centerX, centerY, true, "#FF4500");
            document.body.classList.add('screen-shake');
            setTimeout(() => document.body.classList.remove('screen-shake'), 300);
            this.createParticles(centerX, centerY, "#FF4500");
        }
        this.remove();
    }
    else {
        if(typeof unlockBadge === 'function') {
            unlockBadge('first_kill'); 
            if(!this.game.tappedTypes) this.game.tappedTypes = new Set();
            this.game.tappedTypes.add(this.element.src);
            if(this.game.tappedTypes.size >= 4) unlockBadge('hit_all_classics');
        }
        const now = Date.now();
        if (now < this.game.comboFreezeUntil || now - this.game.lastHitTime < 800) {
            this.game.comboCount++;
            if (this.game.comboCount >= 10 && typeof unlockBadge === 'function') unlockBadge('combo_10');
        } else { 
            this.game.comboCount = 1; 
        }
        this.game.lastHitTime = now;
        const s = this.game.popSounds[Math.floor(Math.random() * this.game.popSounds.length)];
        if (s) { s.currentTime = 0; s.play(); }
        let pts = this.game.isSuperComboActive ? 50 : (25 * this.game.comboCount); 
        this.game.score += pts;
        this.showFloatingText(`+${pts}`, centerX, centerY, false);
        this.createParticles(centerX, centerY, "#ff00ff");
        this.remove();
    }
} spawnLoot(img, x, y) {
        const loot = new Target(img, this.game, true);
        loot.x = x; loot.y = y;
        loot.vx = (Math.random() - 0.5) * 3; 
        loot.vy = -1.5 - Math.random() * 1.5;     
        this.game.targets.push(loot);
    }

    convertToBonus() { 
        if (this.isBomb) { 
            this.isBomb = false; 
            this.element.src = this.game.targetImages[0]; 
            this.element.className = 'targets'; 
            this.element.style.width = ""; 
        } 
    }
    
    convertToMalus() { 
        if (!this.isBomb && !this.isLakitu && !this.isEvilLakitu && !this.isUFO && !this.isDog && !this.isKyurem) { 
            this.isBomb = true; 
            this.element.src = '../assets/images/Bomb.gif'; 
            this.element.className = 'targets bomb-target'; 
        } 
    }

    showFloatingText(t, x, y, m, c = null) {
        const d = document.createElement('div'); d.className = m ? 'combo-text malus' : 'combo-text';
        d.textContent = t; if (c) d.style.color = c; d.style.left = `${x - 30}px`; d.style.top = `${y}px`;
        document.body.appendChild(d); setTimeout(() => d.remove(), 800);
    }

    createParticles(x, y, t) {
        let c = (t === "ufo" || t === "evil") ? 25 : 12;
        for (let i = 0; i < c; i++) {
            const p = document.createElement('div'); p.className = 'pixel';
            p.style.backgroundColor = (t === "ufo") ? "#00FFFF" : (t === "evil" ? "#FF0000" : t);
            p.style.left = `${x}px`; p.style.top = `${y}px`;
            const a = (Math.PI * 2 / c) * i; const dist = 60 + Math.random() * 40;
            p.style.setProperty('--dx', Math.cos(a) * dist + "px"); p.style.setProperty('--dy', Math.sin(a) * dist + "px");
            document.body.appendChild(p); setTimeout(() => p.remove(), 600);
        }
    }

    remove() { if (this.element.parentNode) this.element.remove(); }
}

window.onload = () => { new UnicornShooter(); };

// ================================================================================================================================
// PAGE SCORES /// PAGE SCORES /// PAGE SCORES /// PAGE SCORES /// PAGE SCORES /// PAGE SCORES /// PAGE SCORES /// PAGE SCORES ///
// ================================================================================================================================

// ====================================================================================================================================
// PAGE REMERCIMENTS /// PAGE REMERCIMENTS /// PAGE REMERCIMENTS /// PAGE REMERCIMENTS /// PAGE REMERCIMENTS /// PAGE REMERCIMENTS ///
// ===================================================================================================================================

// =====================================================================================================================================================
// FIN PINATA /// FIN PINATA /// FIN PINATA /// FIN PINATA /// FIN PINATA /// FIN PINATA /// FIN PINATA /// FIN PINATA /// FIN PINATA /// FIN PINATA ///
// ======================================================================================================================================================