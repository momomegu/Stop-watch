'use strict';

//ID取得
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  
　//カウントアップ
  function countUp() {
    const d = new Date(Date.now() - startTime);
    const h = d.getUTCHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const ms = String(d.getMilliseconds()).padStart(1,`0`);
    timer.textContent = `${h}:${m}:${s}:${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }
  
  //ボタン制御
  //スタート処理前はストップ、リセット非活性
  function setButtonStateInitial() {
    start.disebled = false;
    stop.disebled = true;
    reset.disebled = true;
  }
  
  //実行中はスタート、リセットなし
  function setButtonStateRunning() {
    start.disebled = true;
    stop.disebled = false;
    reset.disebled = true;
  }
  
  //ストップ時はストップ非活性
  function setButtonStateStopped() {
    start.disebled = false;
    stop.disebled = true;
    reset.disebled = false;
  }
  
  
  setButtonStateInitial();
  

  start.addEventListener('click', () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });
  
  stop.addEventListener('click', () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
  });
  
  reset.addEventListener('click', () => {
    setButtonStateInitial();
    timer.textContent = `0:0:0:0`;
  });
}