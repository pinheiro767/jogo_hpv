// Quiz questions data with hints
        const quizData = [
            {
                id: "q1",
                tema: "Transmissão e Sintomas",
                caso: "Caso de João (25 anos): João notou o surgimento de pequenas 'verrugas' na região genital. Ele só teve relações com preservativo.",
                pergunta: "Como João pode ter contraído HPV, mesmo usando camisinha? O preservativo protege 100% da transmissão?",
                hint: "Pense em áreas do corpo que não são cobertas pelo preservativo durante o contato íntimo.",
                opcoes: {
                    "A": "Sim, o preservativo protege 100%, então João deve ter contraído de outra forma, como contato com objetos.",
                    "B": "Não, o HPV é transmitido pelo contato pele-a-pele em áreas não cobertas pelo preservativo, por isso a proteção não é total.",
                    "C": "O HPV só pode ser transmitido pelo sêmen, o que indica que o preservativo rasgou ou foi mal utilizado.",
                    "D": "É impossível, o diagnóstico de João está incorreto, pois o HPV exige penetração para ser transmitido."
                },
                resposta_correta: "B",
                explicacao: "O HPV é transmitido primariamente pelo contato pele-a-pele ou mucosa-com-mucosa. Como o preservativo não cobre toda a área genital, a transmissão ainda é possível através do contato com a pele infectada na base do pênis, bolsa escrotal ou região perianal."
            },
            {
                id: "q2",
                tema: "Transmissão e Sintomas",
                caso: "Caso de Maria (30 anos): Maria fez exames de rotina e o resultado deu positivo para HPV, mas ela não tem verrugas ou qualquer outro sintoma aparente.",
                pergunta: "É possível ter o vírus HPV e não apresentar sintoma algum? O que esse resultado significa para a saúde de Maria?",
                hint: "A maioria das infecções por HPV são silenciosas, sem sintomas visíveis.",
                opcoes: {
                    "A": "Não, a presença do vírus significa que as verrugas devem aparecer em breve.",
                    "B": "Sim, a maioria das pessoas com HPV é assintomática, mas o vírus ainda pode ser transmitido e exige monitoramento.",
                    "C": "O resultado significa que o corpo de Maria já eliminou o vírus e ela está imune.",
                    "D": "Significa que ela não tem HPV de alto risco, apenas o de baixo risco que causa verrugas."
                },
                resposta_correta: "B",
                explicacao: "A maioria (cerca de 80%) das pessoas que têm contato com o HPV é assintomática (infecção subclínica). O resultado positivo exige acompanhamento médico para monitorar se o vírus causará lesões precursoras, mesmo sem verrugas visíveis."
            },
            {
                id: "q3",
                tema: "Transmissão e Sintomas",
                caso: "Caso de Pedro (40 anos): Pedro recebeu um diagnóstico de HPV de baixo risco. Ele está preocupado em passar o vírus para sua parceira, com quem vive há 10 anos.",
                pergunta: "Se Pedro iniciar o tratamento para as lesões, ele se torna imune e não poderá mais transmitir o HPV? É possível se recontaminar?",
                hint: "O tratamento remove lesões visíveis, mas considere se o vírus é completamente eliminado do corpo.",
                opcoes: {
                    "A": "Sim, o tratamento elimina o vírus completamente do corpo e confere imunidade permanente.",
                    "B": "O tratamento elimina as lesões, mas o vírus pode permanecer. A recontaminação com outros tipos de HPV também é possível.",
                    "C": "A parceira provavelmente já tem o vírus, então o tratamento de Pedro não é relevante para a transmissão.",
                    "D": "Ele não poderá mais transmitir o HPV, mas pode ser recontaminado se não usar preservativo."
                },
                resposta_correta: "B",
                explicacao: "O tratamento remove as lesões visíveis (verrugas ou lesões precursoras), mas não elimina o vírus do corpo. O vírus pode continuar ativo ou latente, e a pessoa não cria imunidade contra todos os tipos de HPV, podendo ser infectada novamente (recontaminação)."
            },
            {
                id: "q4",
                tema: "Transmissão e Sintomas",
                caso: "Caso de Ana (22 anos): Ana está confusa. Ela ouviu dizer que o HPV é transmitido apenas por penetração vaginal ou anal.",
                pergunta: "A transmissão do HPV pode ocorrer por beijo ou contato manual-genital? Quais são as formas de contágio além da relação sexual com penetração?",
                hint: "O HPV é um vírus de contato que não necessita de fluidos corporais para transmissão.",
                opcoes: {
                    "A": "O HPV só é transmitido por penetração vaginal ou anal, outras formas de contato são seguras.",
                    "B": "Sim, o HPV pode ser transmitido por sexo oral, contato manual-genital e até mesmo beijo, pois é um vírus de contato.",
                    "C": "O beijo não transmite HPV, mas o sexo oral e contato manual-genital podem transmitir o vírus.",
                    "D": "Apenas o sexo oral pode transmitir HPV além da penetração, o contato manual é seguro."
                },
                resposta_correta: "B",
                explicacao: "O HPV pode ser transmitido através de qualquer contato íntimo pele-a-pele ou mucosa-com-mucosa, incluindo sexo oral, contato manual-genital e até mesmo beijo (especialmente para HPV oral). O vírus não requer penetração para ser transmitido."
            }
        ];

        // Mapeamento de elementos de mídia
        const introVideo = document.getElementById('intro-video');
        const gameVideoDisplay = document.getElementById('game-video-display');
        const gameBGM = document.getElementById('game-bgm');
        const soundMove = document.getElementById('sound-move');
        const soundDice = document.getElementById('sound-dice');
        const soundCoin = document.getElementById('sound-coin');
        const soundCorrect = document.getElementById('sound-correct');
        const soundIncorrect = document.getElementById('sound-incorrect');


        // Media state (Estado da mídia)
        let mediaState = {
            videoVisible: false,
            audioPlaying: false,
            soundEnabled: true,
            bgmVolume: 0.5 // Volume padrão para a música de fundo
        };

        // Game state
        let players = [
            {
                id: 1,
                name: '',
                position: 0,
                questionsAnswered: 0,
                correctAnswers: 0,
                coins: 0,
                powerups: {
                    shield: false,
                    double: false,
                    jump: false,
                    hint: false
                }
            },
            {
                id: 2,
                name: '',
                position: 0,
                questionsAnswered: 0,
                correctAnswers: 0,
                coins: 0,
                powerups: {
                    shield: false,
                    double: false,
                    jump: false,
                    hint: false
                }
            }
        ];

        let gameState = {
            isSpinning: false,
            currentQuestion: null,
            boardSize: 20,
            specialCells: {},
            currentPlayerIndex: 0,
            gameStarted: false
        };

        let currentRecordCount = 0;

        // Power-up costs
        const powerupCosts = {
            shield: 5,
            double: 8,
            jump: 10,
            hint: 6
        };

        // Default configuration (mantida)
        const defaultConfig = {
            game_title: "Jogo da Vida HPV",
            subtitle: "Aprenda sobre HPV jogando!",
            start_button_text: "Começar Jogo"
        };

        // Data handler for SDK (mantido)
        const dataHandler = {
            onDataChanged(data) {
                currentRecordCount = data.length;
            }
        };

        // Element SDK implementation (mantido)
        const element = {
            defaultConfig,
            render: async (config) => {
                const title = config.game_title || defaultConfig.game_title;
                const subtitle = config.subtitle || defaultConfig.subtitle;
                const startButtonText = config.start_button_text || defaultConfig.start_button_text;

                document.getElementById('main-title').textContent = `🎲 ${title} 🎲`;
                document.getElementById('main-subtitle').textContent = subtitle;
                document.getElementById('start-button-text').textContent = `🎮 ${startButtonText}`;
                
                const gameTitle = document.getElementById('game-title');
                if (gameTitle) {
                    gameTitle.textContent = `🎲 ${title} 🎲`;
                }
            },
            mapToCapabilities: (config) => ({
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            }),
            mapToEditPanelValues: (config) => new Map([
                ["game_title", config.game_title || defaultConfig.game_title],
                ["subtitle", config.subtitle || defaultConfig.subtitle],
                ["start_button_text", config.start_button_text || defaultConfig.start_button_text]
            ])
        };

        // --- FUNÇÕES DE CONTROLE DE MÍDIA ---

        function updateMediaControlsDisplay() {
            // Atualiza o botão de vídeo
            const videoToggle = document.getElementById('video-toggle');
            if (mediaState.videoVisible) {
                videoToggle.textContent = '📺 Ocultar Vídeo';
                videoToggle.classList.add('active');
            } else {
                videoToggle.textContent = '📺 Mostrar Vídeo Educativo';
                videoToggle.classList.remove('active');
            }

            // Atualiza o botão de música
            const audioToggle = document.getElementById('audio-toggle');
            if (mediaState.audioPlaying) {
                audioToggle.textContent = '🎵 Desligar Música';
                audioToggle.classList.add('active');
                audioToggle.classList.remove('inactive');
            } else {
                audioToggle.textContent = '🎵 Ligar Música';
                audioToggle.classList.remove('active');
                audioToggle.classList.add('inactive');
            }

            // Atualiza o botão de sons
            const soundToggle = document.getElementById('sound-toggle');
            if (mediaState.soundEnabled) {
                soundToggle.textContent = '🔊 Sons Ligados';
                soundToggle.classList.add('active');
                soundToggle.classList.remove('inactive');
            } else {
                soundToggle.textContent = '🔇 Sons Desligados';
                soundToggle.classList.remove('active');
                soundToggle.classList.add('inactive');
            }
        }

        function toggleVideo() {
            const videoContainer = document.getElementById('video-container');
            
            mediaState.videoVisible = !mediaState.videoVisible;
            
            if (mediaState.videoVisible) {
                videoContainer.classList.add('show');
                // Tenta dar play, se for visível
                gameVideoDisplay.play().catch(e => console.warn('Falha ao dar play no vídeo: ', e)); 
            } else {
                videoContainer.classList.remove('show');
                gameVideoDisplay.pause();
                gameVideoDisplay.currentTime = 0; // Volta ao início
            }
            updateMediaControlsDisplay();
        }

        function toggleAudio() {
            gameBGM.volume = mediaState.bgmVolume;
            mediaState.audioPlaying = !mediaState.audioPlaying;
            
            if (mediaState.audioPlaying) {
                gameBGM.play().catch(e => console.warn('Falha ao ligar a música (pode estar bloqueado): ', e));
            } else {
                gameBGM.pause();
            }
            updateMediaControlsDisplay();
        }

        function toggleSound() {
            mediaState.soundEnabled = !mediaState.soundEnabled;
            if (mediaState.soundEnabled) {
                playSound('correct');
            }
            updateMediaControlsDisplay();
        }

        function playSound(type) {
            if (!mediaState.soundEnabled) return;
            
            let audioEl;
            let volume = 1.0;

            // Mapeamento e volume dos sons
            switch(type) {
                case 'correct':
                    audioEl = soundCorrect;
                    break;
                case 'incorrect':
                    audioEl = soundIncorrect;
                    volume = 0.5; // Ajuste o volume para ser menos agressivo
                    break;
                case 'coin':
                    audioEl = soundCoin;
                    volume = 0.5;
                    break;
                case 'dice':
                    audioEl = soundDice;
                    volume = 0.8;
                    break;
                case 'move':
                    audioEl = soundMove;
                    volume = 0.8;
                    break;
                case 'powerup':
                    // Usar o som de acerto para powerup (por ser mais positivo)
                    audioEl = soundCorrect; 
                    volume = 0.7;
                    break;
                case 'intro_click':
                    // Usar o som de movimento para o clique inicial
                    audioEl = soundMove; 
                    volume = 0.7;
                    break;
                default:
                    return;
            }

            if (audioEl) {
                // Toca o som a partir do início, mesmo se já estiver tocando
                audioEl.pause();
                audioEl.currentTime = 0;
                audioEl.volume = volume;
                audioEl.play().catch(e => console.warn(`Falha ao tocar som ${type}: `, e));
            }
        }

        // --- FLUXO DE INICIALIZAÇÃO DO JOGO ---

        function showWelcomeScreen() {
            document.getElementById('video-intro-screen').classList.add('hidden');
            document.getElementById('welcome-screen').classList.remove('hidden');
            introVideo.style.display = 'none';
            playBGM(); // Tenta ligar a música
        }

        function startIntroFlow() {
            playSound('intro_click');
            introVideo.style.display = 'block';
            document.getElementById('play-intro-btn').classList.add('hidden');
            document.getElementById('video-status').textContent = '📺 Vídeo em reprodução...';

            // Tenta dar play no vídeo (com som, pois foi uma interação do usuário)
            introVideo.muted = false;
            introVideo.volume = 1.0; 
            introVideo.play().then(() => {
                console.log("Vídeo iniciado após clique do usuário.");
            }).catch(error => {
                console.error("Falha na reprodução, pulando o vídeo.", error);
                // Se falhar mesmo com o clique, avança
                showWelcomeScreen();
            });
        }

        async function initializeApp() {
            try {
                if (window.dataSdk) {
                    const initResult = await window.dataSdk.init(dataHandler);
                    if (!initResult.isOk) {
                        console.error("Failed to initialize data SDK");
                    }
                }

                if (window.elementSdk) {
                    await window.elementSdk.init(element);
                }

                // 1. Tentar dar play automático no vídeo
                introVideo.muted = true; // Necessário para autoplay em muitos navegadores
                introVideo.play().then(() => {
                    // SUCESSO: O vídeo está tocando (em mudo)
                    introVideo.muted = false; // Permite ao usuário ligar o som
                    introVideo.style.display = 'block';
                    document.getElementById('video-status').textContent = '▶️ Clique no vídeo para INICIAR a introdução e o fluxo do jogo!';
                }).catch(error => {
                    // FALHA: O autoplay foi bloqueado
                    console.warn("Autoplay do vídeo bloqueado. Requer clique.");
                    document.getElementById('play-intro-btn').classList.remove('hidden');
                    document.getElementById('video-status').textContent = '▶️ Pressione "Iniciar Vídeo / Jogo" para continuar.';
                });

                // 2. Configurar evento de término do vídeo
                introVideo.onended = () => {
                    showWelcomeScreen();
                };

                // 3. Configurar volume inicial da BGM
                gameBGM.volume = mediaState.bgmVolume;
                updateMediaControlsDisplay();

            } catch (error) {
                console.error("Error initializing app:", error);
                // Em caso de erro fatal, avança para a tela de boas-vindas
                showWelcomeScreen();
            }
        }

        function playBGM() {
            if (!mediaState.audioPlaying) {
                 gameBGM.volume = mediaState.bgmVolume;
                 gameBGM.play().then(() => {
                    mediaState.audioPlaying = true;
                    updateMediaControlsDisplay();
                 }).catch(e => {
                    console.warn("Música de fundo bloqueada. O usuário deve ligá-la manualmente.");
                    mediaState.audioPlaying = false;
                    updateMediaControlsDisplay();
                 });
            }
        }

        function stopBGM() {
            gameBGM.pause();
            gameBGM.currentTime = 0;
            mediaState.audioPlaying = false;
            updateMediaControlsDisplay();
        }

        // --- FUNÇÕES DE LÓGICA DO JOGO ---

        function startGame() {
            const player1Name = document.getElementById('player1-name').value.trim();
            const player2Name = document.getElementById('player2-name').value.trim();
            
            // Validação
            if (!player1Name) {
                document.getElementById('player1-name').style.borderColor = '#ef4444';
                return;
            }
            if (!player2Name) {
                document.getElementById('player2-name').style.borderColor = '#ef4444';
                return;
            }

            // Inicialização dos jogadores
            players[0].name = player1Name;
            players[1].name = player2Name;
            players[0].coins = 10; 
            players[1].coins = 10;
            gameState.gameStarted = true;
            gameState.currentPlayerIndex = 0;
            
            document.getElementById('welcome-screen').classList.add('hidden');
            document.getElementById('game-screen').classList.remove('hidden');
            
            initializeBoard();
            updatePlayerDisplay();
            updatePowerupButtons();
            playBGM(); // Garante que a BGM comece no primeiro clique de jogo
            playSound('powerup');
        }

        function initializeBoard() {
            const board = document.getElementById('game-board');
            board.innerHTML = '';
            
            // Define special cells
            gameState.specialCells = {
                3: 'treasure',
                7: 'mystery',
                11: 'double',
                15: 'treasure',
                18: 'mystery'
            };
            
            for (let i = 0; i <= gameState.boardSize; i++) {
                const cell = document.createElement('div');
                cell.className = 'board-cell';
                cell.id = `cell-${i}`;
                
                if (i === 0) {
                    cell.classList.add('cell-start');
                    cell.innerHTML = '🏁<br>INÍCIO';
                } else if (i === gameState.boardSize) {
                    cell.classList.add('cell-finish');
                    cell.innerHTML = '🏆<br>FIM';
                } else if (gameState.specialCells[i] === 'treasure') {
                    cell.classList.add('cell-treasure');
                    cell.innerHTML = '💰<br>TESOURO';
                } else if (gameState.specialCells[i] === 'mystery') {
                    cell.classList.add('cell-mystery');
                    cell.innerHTML = '🎁<br>MISTÉRIO';
                } else if (gameState.specialCells[i] === 'double') {
                    cell.classList.add('cell-double');
                    cell.innerHTML = '⚡<br>DOBRO';
                } else if (i % 4 === 0) {
                    cell.classList.add('cell-bonus');
                    cell.innerHTML = '⭐<br>BÔNUS';
                } else if (i % 3 === 0) {
                    cell.classList.add('cell-challenge');
                    cell.innerHTML = '⚡<br>DESAFIO';
                } else {
                    cell.classList.add('cell-question');
                    cell.innerHTML = '❓<br>PERGUNTA';
                }
                
                board.appendChild(cell);
            }
            
            updatePlayerPosition();
        }

        function updatePlayerDisplay() {
            const currentPlayer = players[gameState.currentPlayerIndex];
            
            document.getElementById('current-player').textContent = `Vez de: ${currentPlayer.name}`;
            document.getElementById('player-position').textContent = currentPlayer.position;
            document.getElementById('player-score').textContent = currentPlayer.correctAnswers;
            document.getElementById('player-coins').textContent = currentPlayer.coins;
            
            // Update both player cards
            players.forEach((player, index) => {
                const playerId = index + 1;
                document.getElementById(`player${playerId}-name-display`).textContent = player.name;
                document.getElementById(`player${playerId}-position-display`).textContent = player.position;
                document.getElementById(`player${playerId}-questions-display`).textContent = player.questionsAnswered;
                document.getElementById(`player${playerId}-correct-display`).textContent = player.correctAnswers;
                document.getElementById(`player${playerId}-coins-display`).textContent = player.coins;
                
                // Update active powerups display
                const activePowerups = Object.keys(player.powerups).filter(p => player.powerups[p]);
                const powerupNames = {
                    shield: '🛡️ Escudo',
                    double: '⚡ Dobrar',
                    jump: '🚀 Pulo',
                    hint: '💡 Dica'
                };
                
                const activeText = activePowerups.length > 0 
                    ? activePowerups.map(p => powerupNames[p]).join(', ')
                    : 'Nenhum';
                
                document.getElementById(`player${playerId}-active-powerups`).textContent = `Power-ups Ativos: ${activeText}`;
                
                // Highlight current player's card
                const card = document.getElementById(`player${playerId}-card`);
                if (index === gameState.currentPlayerIndex) {
                    card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    card.style.transform = 'scale(1.02)';
                } else {
                    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    card.style.transform = 'scale(1)';
                }
            });
        }

        function updatePlayerPosition() {
            // Remove existing pins
            document.querySelectorAll('.player-pin').forEach(pin => pin.remove());
            
            // Add pins for both players
            players.forEach((player, index) => {
                const currentCell = document.getElementById(`cell-${player.position}`);
                if (currentCell) {
                    const pin = document.createElement('div');
                    pin.className = `player-pin player-${index + 1}`;
                    currentCell.appendChild(pin);
                }
            });
        }

        function updatePowerupButtons() {
            const currentPlayer = players[gameState.currentPlayerIndex];
            
            Object.keys(powerupCosts).forEach(powerup => {
                const button = document.getElementById(`${powerup}-powerup`);
                const cost = powerupCosts[powerup];
                const isActive = currentPlayer.powerups[powerup];
                const canAfford = currentPlayer.coins >= cost;
                
                if (isActive) {
                    button.classList.add('active');
                    button.classList.remove('disabled');
                } else if (canAfford) {
                    button.classList.remove('disabled', 'active');
                } else {
                    button.classList.add('disabled');
                    button.classList.remove('active');
                }
            });
        }

        function buyPowerup(type) {
            const currentPlayer = players[gameState.currentPlayerIndex];
            const cost = powerupCosts[type];
            
            if (currentPlayer.powerups[type]) {
                showNotification(`${getPowerupName(type)} já está ativo!`, '#f39c12');
                return;
            }
            
            if (currentPlayer.coins < cost) {
                showNotification(`Moedas insuficientes! Precisa de ${cost} moedas.`, '#e74c3c');
                return;
            }
            
            currentPlayer.coins -= cost;
            currentPlayer.powerups[type] = true;
            
            updatePlayerDisplay();
            updatePowerupButtons();
            playSound('powerup');
            
            showNotification(`${getPowerupName(type)} ativado para ${currentPlayer.name}!`, '#2ecc71');
            
            // Auto-deactivate after use (except shield)
            if (type !== 'shield') {
                setTimeout(() => {
                    currentPlayer.powerups[type] = false;
                    updatePlayerDisplay();
                    updatePowerupButtons();
                }, type === 'double' ? 30000 : 60000); // 30s for double, 60s for others
            }
        }

        function getPowerupName(type) {
            const names = {
                shield: '🛡️ Escudo',
                double: '⚡ Dobrar Moedas',
                jump: '🚀 Super Pulo',
                hint: '💡 Dica Extra'
            };
            return names[type];
        }

        function showNotification(message, color = '#2ecc71') {
            const notification = document.createElement('div');
            notification.className = 'powerup-notification';
            notification.style.background = color;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        function spinRoulette() {
            if (gameState.isSpinning) return;
            
            const currentPlayer = players[gameState.currentPlayerIndex];
            
            gameState.isSpinning = true;
            const spinButton = document.getElementById('spin-button');
            const roulette = document.getElementById('roulette-wheel');
            const resultDiv = document.getElementById('spin-result');
            
            spinButton.disabled = true;
            spinButton.innerHTML = '<span class="loading"></span> Girando...';
            resultDiv.textContent = '';
            
            playSound('dice'); // Toca o som do dado/roleta
            
            // Random rotation (multiple full rotations + random angle)
            const randomRotation = 1440 + Math.random() * 360;
            roulette.style.transform = `rotate(${randomRotation}deg)`;
            
            setTimeout(() => {
                let steps = Math.floor(Math.random() * 6) + 1;
                
                // Apply jump powerup
                if (currentPlayer.powerups.jump) {
                    steps += 3;
                    currentPlayer.powerups.jump = false;
                    showNotification(`🚀 ${currentPlayer.name} usou Super Pulo! +3 casas extras!`);
                    playSound('powerup');
                }
                
                const colors = ['🔴', '🟢', '🔵', '🟡', '🟠', '🟣'];
                const colorNames = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Laranja', 'Roxo'];
                const resultIndex = Math.floor(randomRotation / 60) % 6;
                
                resultDiv.innerHTML = `${colors[resultIndex]} ${colorNames[resultIndex]} - ${currentPlayer.name} avança ${steps} casas!`;
                
                movePlayer(steps);
                
                gameState.isSpinning = false;
                spinButton.disabled = false;
                spinButton.innerHTML = '🎲 Girar Roleta';
                updatePowerupButtons();
            }, 3000);
        }

        function movePlayer(steps) {
            const currentPlayer = players[gameState.currentPlayerIndex];
            const targetPosition = Math.min(currentPlayer.position + steps, gameState.boardSize);
            
            // Animate movement
            let currentPos = currentPlayer.position;
            const moveInterval = setInterval(() => {
                if (currentPos < targetPosition) {
                    currentPos++;
                    currentPlayer.position = currentPos;
                    updatePlayerPosition();
                    updatePlayerDisplay();
                    playSound('move'); // Toca som de movimento a cada passo
                } else {
                    clearInterval(moveInterval);
                    
                    // Check for special cell effects
                    handleSpecialCell();
                    
                    // Check if game is finished
                    if (currentPlayer.position >= gameState.boardSize) {
                        finishGame();
                    } else {
                        // Show question after movement
                        setTimeout(() => showQuestion(), 500);
                    }
                }
            }, 300);
        }

        function handleSpecialCell() {
            const currentPlayer = players[gameState.currentPlayerIndex];
            const cellType = gameState.specialCells[currentPlayer.position];
            
            if (cellType === 'treasure') {
                const bonus = 5;
                currentPlayer.coins += bonus;
                showBonusEffect(`+${bonus} 💰`);
                showNotification(`${currentPlayer.name} encontrou tesouro! +${bonus} moedas!`);
                playSound('coin');
            } else if (cellType === 'mystery') {
                const effects = [
                    () => { 
                        currentPlayer.coins += 3; 
                        showNotification(`Mistério: ${currentPlayer.name} ganhou +3 moedas!`); 
                        playSound('coin');
                    },
                    () => { 
                        currentPlayer.coins += 7; 
                        showNotification(`Mistério: ${currentPlayer.name} ganhou +7 moedas!`); 
                        playSound('coin');
                    },
                    () => { 
                        if (currentPlayer.position > 1) {
                            currentPlayer.position -= 1;
                            updatePlayerPosition();
                            showNotification(`Mistério: ${currentPlayer.name} volta 1 casa!`, '#e74c3c');
                            playSound('incorrect');
                        }
                    }
                ];
                const randomEffect = effects[Math.floor(Math.random() * effects.length)];
                randomEffect();
            } else if (cellType === 'double') {
                currentPlayer.powerups.double = true;
                showNotification(`Casa Especial: Próximas moedas de ${currentPlayer.name} serão dobradas!`);
                playSound('powerup');
                setTimeout(() => {
                    currentPlayer.powerups.double = false;
                    updatePowerupButtons();
                }, 30000);
            }
            
            updatePlayerDisplay();
            updatePowerupButtons();
        }

        function showQuestion() {
            const currentPlayer = players[gameState.currentPlayerIndex];
            const randomQuestion = quizData[Math.floor(Math.random() * quizData.length)];
            gameState.currentQuestion = randomQuestion;
            
            document.getElementById('question-theme').textContent = `${randomQuestion.tema} - ${currentPlayer.name}`;
            document.getElementById('case-text').textContent = randomQuestion.caso;
            document.getElementById('question-text').textContent = randomQuestion.pergunta;
            
            // Show hint if powerup is active
            const hintSection = document.getElementById('hint-section');
            if (currentPlayer.powerups.hint) {
                document.getElementById('hint-text').textContent = randomQuestion.hint;
                hintSection.classList.remove('hidden');
                currentPlayer.powerups.hint = false;
                showNotification(`💡 ${currentPlayer.name} usou Dica Extra!`);
                playSound('powerup');
            } else {
                hintSection.classList.add('hidden');
            }
            
            const optionsGrid = document.getElementById('options-grid');
            optionsGrid.innerHTML = '';
            
            Object.entries(randomQuestion.opcoes).forEach(([letter, text]) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.innerHTML = `<strong>${letter})</strong> ${text}`;
                button.onclick = () => selectAnswer(letter, button);
                optionsGrid.appendChild(button);
            });
            
            document.getElementById('explanation').classList.remove('show');
            document.getElementById('continue-btn').disabled = true;
            document.getElementById('question-modal').classList.add('show');
            updatePowerupButtons();
        }

        function selectAnswer(selectedLetter, buttonElement) {
            const currentPlayer = players[gameState.currentPlayerIndex];
            const question = gameState.currentQuestion;
            
            // Disable all options
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.onclick = null;
                btn.classList.remove('selected', 'correct', 'incorrect');
            });
            
            // Mark selected option
            buttonElement.classList.add('selected');
            
            const isCorrect = selectedLetter === question.resposta_correta;
            buttonElement.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            // Highlight correct answer if user was wrong
            if (!isCorrect) {
                document.querySelectorAll('.option-btn').forEach(btn => {
                    const letter = btn.innerHTML.match(/<strong>([A-D])\)/)[1];
                    if (letter === question.resposta_correta) {
                        btn.classList.add('correct');
                    }
                });
            }
            
            // Update player stats
            currentPlayer.questionsAnswered++;
            
            if (isCorrect) {
                currentPlayer.correctAnswers++;
                
                // Award coins
                let coinsEarned = 3;
                if (currentPlayer.powerups.double) {
                    coinsEarned *= 2;
                    showNotification(`⚡ Moedas de ${currentPlayer.name} dobradas!`);
                }
                
                currentPlayer.coins += coinsEarned;
                showCoinAnimation(coinsEarned);
                playSound('correct');
            } else {
                // Use shield or apply penalty
                if (currentPlayer.powerups.shield) {
                    currentPlayer.powerups.shield = false;
                    showNotification(`🛡️ Escudo protegeu ${currentPlayer.name}!`);
                    playSound('powerup');
                } else {
                    // Move back one position
                    if (currentPlayer.position > 0) {
                        currentPlayer.position = Math.max(0, currentPlayer.position - 1);
                        updatePlayerPosition();
                        showBombAnimation();
                        playSound('incorrect');
                    }
                }
            }
            
            // Show explanation
            document.getElementById('explanation-text').textContent = question.explicacao;
            document.getElementById('explanation').classList.add('show');
            document.getElementById('continue-btn').disabled = false;
            
            // Save answer to data SDK
            saveGameData(question.id, selectedLetter, isCorrect);
            updatePlayerDisplay();
            updatePowerupButtons();
        }

        function showCoinAnimation(amount) {
            for (let i = 0; i < amount; i++) {
                setTimeout(() => {
                    const coin = document.createElement('div');
                    coin.className = 'coin-animation';
                    coin.textContent = '💰';
                    coin.style.left = `${50 + (Math.random() - 0.5) * 200}px`;
                    coin.style.top = `${50 + (Math.random() - 0.5) * 100}px`;
                    document.body.appendChild(coin);
                    
                    setTimeout(() => coin.remove(), 2000);
                }, i * 200);
            }
        }

        function showBombAnimation() {
            const bomb = document.createElement('div');
            bomb.className = 'bomb-animation';
            bomb.textContent = '💣';
            bomb.style.left = '50%';
            bomb.style.top = '50%';
            bomb.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(bomb);
            
            setTimeout(() => bomb.remove(), 1500);
        }

        function showBonusEffect(text) {
            const effect = document.createElement('div');
            effect.className = 'bonus-effect';
            effect.textContent = text;
            document.body.appendChild(effect);
            
            setTimeout(() => effect.remove(), 2000);
        }

        async function saveGameData(questionId, selectedAnswer, isCorrect) {
            if (!window.dataSdk) return;
            
            if (currentRecordCount >= 999) {
                return;
            }
            
            try {
                const currentPlayer = players[gameState.currentPlayerIndex];
                const result = await window.dataSdk.create({
                    player_name: currentPlayer.name,
                    question_id: questionId,
                    selected_answer: selectedAnswer,
                    is_correct: isCorrect,
                    current_position: currentPlayer.position,
                    questions_answered: currentPlayer.questionsAnswered,
                    correct_answers: currentPlayer.correctAnswers,
                    coins_earned: currentPlayer.coins,
                    timestamp: new Date().toISOString()
                });
                
                if (!result.isOk) {
                    console.error("Failed to save game data");
                }
            } catch (error) {
                console.error("Error saving game data:", error);
            }
        }

        function continueGame() {
            document.getElementById('question-modal').classList.remove('show');
            
            // Switch to next player
            gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % 2;
            
            updatePlayerDisplay();
            updatePowerupButtons();
        }

        function finishGame() {
            // Determine winner
            const player1 = players[0];
            const player2 = players[1];
            
            let winner = '';
            // Critério: quem chegou ao final, se ambos, mais acertos, se empate, mais moedas
            if (player1.position === gameState.boardSize && player2.position !== gameState.boardSize) {
                winner = `🏆 ${player1.name} venceu!`;
            } else if (player2.position === gameState.boardSize && player1.position !== gameState.boardSize) {
                winner = `🏆 ${player2.name} venceu!`;
            } else if (player1.correctAnswers > player2.correctAnswers) {
                winner = `🏆 ${player1.name} venceu por acertos!`;
            } else if (player2.correctAnswers > player1.correctAnswers) {
                winner = `🏆 ${player2.name} venceu por acertos!`;
            } else if (player1.coins > player2.coins) {
                winner = `🏆 ${player1.name} venceu por moedas!`;
            } else if (player2.coins > player1.coins) {
                winner = `🏆 ${player2.name} venceu por moedas!`;
            } else {
                winner = '🤝 Empate! Ambos jogaram muito bem!';
            }
            
            // Save final game state
            saveFinalGameData();
            
            document.getElementById('game-screen').classList.add('hidden');
            document.getElementById('results-screen').classList.remove('hidden');
            
            // Update final results
            document.getElementById('player1-final-name').textContent = player1.name;
            document.getElementById('player1-final-position').textContent = player1.position;
            document.getElementById('player1-final-score').textContent = player1.correctAnswers;
            document.getElementById('player1-final-coins').textContent = player1.coins;
            
            document.getElementById('player2-final-name').textContent = player2.name;
            document.getElementById('player2-final-position').textContent = player2.position;
            document.getElementById('player2-final-score').textContent = player2.correctAnswers;
            document.getElementById('player2-final-coins').textContent = player2.coins;
            
            document.getElementById('winner-announcement').textContent = winner;
            
            stopBGM();
            playSound('correct'); // Som de vitória
        }

        async function saveFinalGameData() {
            if (!window.dataSdk) return;
            
            if (currentRecordCount >= 999) return;
            
            try {
                for (let player of players) {
                    const result = await window.dataSdk.create({
                        player_name: player.name,
                        final_position: player.position,
                        questions_answered: player.questionsAnswered,
                        correct_answers: player.correctAnswers,
                        game_completed: true,
                        completion_time: new Date().toISOString(),
                        coins_earned: player.coins
                    });
                    
                    if (!result.isOk) {
                        console.error("Failed to save final game data for", player.name);
                    }
                }
            } catch (error) {
                console.error("Error saving final game data:", error);
            }
        }

        function restartGame() {
            // Reset players
            players.forEach(player => {
                player.position = 0;
                player.questionsAnswered = 0;
                player.correctAnswers = 0;
                player.coins = 0;
                player.powerups = {
                    shield: false,
                    double: false,
                    jump: false,
                    hint: false
                };
            });
            
            // Reset game state
            gameState = {
                isSpinning: false,
                currentQuestion: null,
                boardSize: 20,
                specialCells: {},
                currentPlayerIndex: 0,
                gameStarted: false
            };
            
            // Reset media state
            mediaState = {
                videoVisible: false,
                audioPlaying: false,
                soundEnabled: true,
                bgmVolume: 0.5
            };
            
            // Reset UI
            document.getElementById('results-screen').classList.add('hidden');
            document.getElementById('game-screen').classList.add('hidden');
            document.getElementById('video-intro-screen').classList.remove('hidden'); // Volta para a tela de introdução
            document.getElementById('player1-name').value = '';
            document.getElementById('player2-name').value = '';
            document.getElementById('player1-name').style.borderColor = '#ff6b6b';
            document.getElementById('player2-name').style.borderColor = '#4ecdc4';
            
            // Reset media elements
            const videoContainer = document.getElementById('video-container');
            
            videoContainer.classList.remove('show');
            gameVideoDisplay.pause();
            gameVideoDisplay.currentTime = 0;
            
            stopBGM(); // Garante que a música pare
            
            // Inicia o fluxo de introdução novamente
            initializeApp();
        }

        // --- NOVO TRECHO (js/game.js) ---
async function initializeApp() {
    try {
        // ... (código SDK) ...

        // 1. Tentar dar play automático no vídeo
        introVideo.muted = true; // Necessário para autoplay em muitos navegadores
        introVideo.play().then(() => {
            // SUCESSO: O vídeo está tocando (em mudo)
            introVideo.muted = false; // Permite ao usuário ligar o som
            introVideo.style.display = 'block';
            document.getElementById('video-status').textContent = '🔊 Clique no vídeo para ligar o som.';
        }).catch(error => {
            // FALHA: O autoplay foi bloqueado - MOSTRA O BOTÃO DE INÍCIO
            console.warn("Autoplay do vídeo bloqueado. Requer clique.", error);
            document.getElementById('play-intro-btn').classList.remove('hidden'); // <<-- IMPORTANTE
            document.getElementById('video-status').textContent = '▶️ Pressione "Iniciar Vídeo / Jogo" para continuar.';
        });

        // ... (o restante da função continua) ...