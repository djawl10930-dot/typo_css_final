// 1. 데이터 정의 (오류 수정 완료)
const playData = {
    'item1': {
        title: '수건돌리기.com',
        content: `<img src="images/수건돌리기이미지.jpg" class="popup-top-img" alt="수건돌리기 이미지">
            <div class="popup-section">
                <h3 class="section-tag">개요</h3>
                <p>여러 명이 둥글게 앉아 술래가 몰래 수건을 떨어뜨리고 도망치는 방식의 추격 게임이다. 누군가 몰래 내려놓은 수건 한 장에 온 신경을 곤두세워 보자. 술래가 한 바퀴를 돌아와 나의 어깨를 가볍게 치기 전, 그 은밀한 신호를 알아채고 바닥을 박차고 일어나는 순간, 우리는 다시금 순수한 설렘의 중심으로 뛰어들게 된다.</p>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">준비물</h3>
                <ul class="popup-list">
                    <li><strong>수건</strong> 작고 부드러운 수건. 손수건이나 천 조각도 가능</li>
                    <li><strong>넓고 안전한 공간</strong> 여러명이 둘러 앉을 정도</li>
                    <li><strong>함께 할 사람들</strong> 5명 이상이면 가장 즐겁다 </li>
                </ul>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">규칙</h3>
                <ol class="popup-list">
                    <li><strong>원 만들기</strong> 참여자들이 원을 만들어 앉고, 가위바위보 등으로 ‘수건을 돌릴 사람’을 정한다.</li>
                    <li><strong>게임 시작</strong> 술래는 수건을 들고, ‘둥글게 둥글게’ 노래와 함께 원 밖을 돌기 시작한다.</li>
                    <li><strong>공격</strong> 노래가 이어지는 동안, 술래는 몰래 누군가의 뒤에 수건을 떨어뜨리고, 티 내지 않는다.</li>
                    <li><strong>추격</strong> 수건이 자기 뒤에 놓인 걸 눈치챈 사람은 재빨리 일어나 수건을 든 사람을 쫓는다.</li>
                    <li><strong>도망</strong> 술래는 잡히기 전에 원을 한 바퀴 돌아 제자리에 앉아야하고, 잡히면 다시 술래가 된다.</li>
                    <li><strong>성공</strong> 술래가 원을 한 바퀴 다 돌기 전에 눈치채지 못한 경우, 그 사람을 터치하면 자리에 앉아 있던 사람이 벌칙을 받고 술래가 된다.</li>
                </ol>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">필승법</h3>
                <p><strong>수건돌리기는 포커페이스와 들킨 직후의 대처가 중요하다.</strong></p>
                <p><strong>술래는,</strong> 포커페이스와 역습을 명심할 것!</p>
            </div>
        `
    },

     'item2': {
        title: '공기놀이.com',
        content: `<img src="images/공기놀이이미지.webp" class="popup-top-img" alt="공기 이미지">
            <div class="popup-section">
                <h3 class="section-tag">개요</h3>
                <p>스마트폰도, 전원도, 와이파이도 필요 없다. 돌멩이 다섯 개면 충분하다. 손끝과 눈과 숨이 하나로 묶이는 순간, 머릿속을 채우던 알림과 걱정들이 잠시 사라진다. 공기놀이는 몸으로 하는 집중이다.</p>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">준비물</h3>
                <ul class="popup-list">
                    <li><strong>공깃돌 5개</strong> 전용 공깃돌 또는 적당한 크기의 돌멩이</li>
                </ul>
            </div>
             <div class="popup-section">
                <h3 class="section-tag">기본 방법</h3>
                <ul class="popup-list">
                    <li>공깃돌 5개를 바닥에 흩뿌린 뒤, 한 알을 위로 던지는 동안 바닥의 돌을 집고 던진 돌을 받는다. 1알씩 집기부터 시작해 2알, 3알, 4알 순서로 난이도를 높여간다.</li>
                </ul>    
            </div>
            <div class="popup-section">
                <h3 class="section-tag">규칙</h3>
                <ol class="popup-list">
                    <li>던진 돌을 떨어뜨리거나, 집어야 할 돌을 건드리면 실패. 가장 높은 단계를 먼저 완료한 사람이 이긴다.</li>
                    <li><strong>1알씩 집기</strong> 돌 하나를 던지고 바닥의 돌을 한 알씩 집는다.</li>
                    <li><strong>2알씩 집기</strong> 두 알을 한 번에 집는다.</li>
                    <li><strong>꺾어잡기</strong> 손가락 사이에 끼워 잡는다.</li>
                    <li><strong>손등받기</strong> 손등 위에 올려 받은 뒤 다시 잡는다.</li>
                    <li><strong>고이받기</strong> 다섯 알을 한꺼번에 처리한다.</li>
                </ol>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">필승법</h3>
                <p><strong>공기놀이는 손의 각도와 공중에서의 체공 시간을 완벽히 지배하는 자가 승리한다.</strong></p>
            </div>
        `
    },
    
    'item3': {
        title: '딱지치기.com',
        content: `<img src="images/딱지치기이미지.jpg" class="popup-top-img" alt="딱지치기 이미지">
            <div class="popup-section">
                <h3 class="section-tag">개요</h3>
                <p>종이를 접어 만든 딱지를 이용해 상대의 딱지를 뒤집는 전통 놀이. 단순해 보이지만 기술과 힘 조절이 핵심이다. 종이 한 장에 담긴 어른의 진심.</p>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">준비물</h3>
                <ul class="popup-list">
                    <li><strong>딱지</strong> 색종이나 신문지, A4용지 등으로 만든 종이 딱지</li>
                </ul>
            </div>
             <div class="popup-section">
                <h3 class="section-tag">기본 방법</h3>
                <ul class="popup-list">
                    <li>가위바위보로 순서를 정해 번갈아 가며 진행한다. 진 사람이 딱지를 바닥에 놓고, 이긴 사람이 자신의 딱지로 옆을 내려쳐 뒤집는다. 상대 딱지를 뒤집으면 해당 딱지를 가져가고 한 번 더 기회를 가지며, 실패하면 다음 사람에게 차례가 넘어간다. </li>
                </ul>    
            </div>
            <div class="popup-section">
                <h3 class="section-tag">딱지 접는 법</h3>
                <ol class="popup-list">
                    <li><strong>종이 2장(A4 또는 색종이)을 준비</strong>하고, 더 단단하게 하려면 4장을 사용한다.</li>
                    <li><strong>각 종이를 3등분으로 접어</strong> 길쭉한 직사각형 모양으로 만든다.</li>
                    <li><strong>양쪽 끝을 삼각형</strong> 모양으로 접는다.</li>
                    <li><strong>두 종이를 겹쳐 아래쪽 종이의 삼각 끝부터 안쪽으로 차례로 접고,</strong> 마지막 끝은 삼각 사이에 넣어 완성한다.</li>
                </ol>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">필승법</h3>
                <p><strong>딱지는 단순한 힘이 아니라 바람의 길과 타격 지점을 정확히 파악해야 한다.</strong></p>
            </div>
        `
    },

    'item4': {
        title: '경찰과도둑.com',
        content: `<img src="images/경찰과도둑이미지.avif" class="popup-top-img" alt="경찰과 도둑 이미지">
            <div class="popup-section">
                <h3 class="section-tag">개요</h3>
                <p>어른이라는 무게를 내려놓고 해 질 녘 운동장을 누비던 아이가 되어 보자. 경찰은 도둑을 잡아 '감옥'에 가두고, 도둑은 잡힌 동료를 터치해 다시 자유의 품으로 돌려보낸다. 이 게임의 목적은 단순하다. 화면 속 가상의 성취가 아닌, 흙먼지 날리는 바닥을 박차고 뛰며 느끼는 ‘살아있음’ 그 자체를 경험하는 것.</p>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">준비물</h3>
                <ul class="popup-list">
                    <li><strong>장소</strong> 뛰어놀기 적당하고 경계가 확실한 넓은 공간</li>
                    <li><strong>감옥 표시</strong> 감옥으로 사용할 특정 구역(벤치, 나무 등)</li>
                    <li><strong>팀 구분</strong> 팀을 나눌 조끼나 손수건</li>
                </ul>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">규칙</h3>
                <ol class="popup-list">
                    <li><strong>팀 나누기:</strong> 경찰과 도둑의 비율을 약 1:2 혹은 1:3 정도로 나눈다.</li>
                    <li><strong>구역 설정:</strong> 활동 범위를 정하고, 감옥 위치를 확정한다.</li>
                    <li><strong>잠복 및 도망:</strong> 도둑들이 먼저 도망간 뒤, 경찰이 추격을 시작한다.</li>
                    <li><strong>검거 및 구출:</strong> 경찰이 도둑을 터치하면 감옥행, 동료가 터치하면 구출!</li>
                    <li><strong>종료:</strong> 모든 도둑이 잡히거나 제한 시간이 끝나면 종료.</li>
                </ol>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">필승법</h3>
                <p><strong> 달리기 실력보다 팀워크와 시선 분산에서 승패가 갈린다.</strong></p>
                <p><strong>도둑은,</strong> 발 빠른 미끼가 시선을 끄는 사이, 사각지대를 이용한 기습 구출!</p>
            </div>
        `
    }, // <-- 여기에 콤마(,)가 필요했습니다!
    
    'item5': {
        title: '무궁화꽃이피었습니다.com',
        content: `<img src="images/무궁화이미지.jpg" class="popup-top-img" alt="무궁화꽃 이미지">
            <div class="popup-section">
                <h3 class="section-tag">개요</h3>
                <p>단순한 규칙 속에서 극도의 긴장감과 몰입을 만들어내는 전통 놀이. 자유롭게 달리다 어떤 순간에는 시간이 멈춘 듯 완전히 정지해야 한다. 순간적인 판단력과 몸의 제어, 그리고 심리전까지 포함된 복합게임.</p>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">준비물</h3>
                <ul class="popup-list">
                    <li><strong>장소</strong> 안전을 위해 평평하고 장애물이 없는 장소가 적합하다</li>
                    <li><strong>참가 인원</strong> 5명 이상을 추천한다</li>
                </ul>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">규칙</h3>
                <ol class="popup-list">
                    <li><strong>1단계</strong> 술래는 벽이나 특정 방향을 향해 서고, 나머지 참가자들은 일정 거리 뒤에서 출발한다.</li>
                    <li><strong>2단계</strong> 술래가 “무궁화 꽃이 피었습니다”라는 구호를 외치는 동안, 참가자들은 전진한다.</li>
                    <li><strong>3단계</strong> 술래가 뒤를 돌아보면 참가자들은 반드시 멈춰야 하며, 조금이라도 움직이면 탈락된다.</li>
                    <li><strong>4단계</strong> 가장 먼저 술래에게 도달한 사람이 승리한다.</li>
                </ol>
            </div>
            <div class="popup-section">
                <h3 class="section-tag">필승법</h3>
                <p><strong> 술래의 리듬 파괴에 휘둘리지 않고 자신의 신체 밸런스를 유지하는 것이 관건이다.</strong></p>
                <p>급정지하는 순간 무릎이 먼저 반응할 수 있으니, 몸은 마음만큼 어리지 않다는 사실도 가볍게 인정해주어야 한다.</p>
            </div>
        `
    }  
}; // <-- 이 중괄호가 playData 전체를 닫아주는 아주 중요한 녀석입니다!

// 2. 팝업 열기 함수
function openPopup(id) {
    const popup = document.getElementById('custom-popup');
    const title = document.getElementById('popup-title-text');
    const body = document.getElementById('popup-inner-content');

    if (playData[id]) {
        title.innerText = playData[id].title;
        body.innerHTML = playData[id].content;
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }
}

// 3. 팝업 닫기 함수
function closeMyPopup() {
    const popup = document.getElementById('custom-popup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

// 배경 클릭 시 닫기
window.onclick = function(event) {
    const popup = document.getElementById('custom-popup');
    if (event.target == popup) {
        closeMyPopup();
    }
}