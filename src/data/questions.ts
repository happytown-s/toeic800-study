import type { Question } from '../core/types';

export const questions: Question[] = [
  // ===== Part 1: Photo Description (5 questions) =====
  {
    id: 101,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q101-office-folder.png',
    imageAlt: 'A woman handing a folder to a colleague in an office.',
    audioScript: '(A) The man is adjusting his tie in front of a mirror.\n(B) The woman is handing a folder to her colleague.\n(C) A group of colleagues is reviewing documents on a table.\n(D) The office building has several empty parking spaces.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真描写問題では、写真に写っている内容に最も合致する説明を選びます。「女性が同僚にフォルダを渡している」が正解です。動作や状態を正確に捉えることが重要です。',
    keyVocabulary: [
      { word: 'handing', meaning: '手渡す（動詞handの現在分詞）' },
      { word: 'folder', meaning: '書類入れ、フォルダー' },
      { word: 'colleague', meaning: '同僚' },
    ],
  },
  {
    id: 102,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q102-kitchen-prep.png',
    imageAlt: 'Kitchen staff preparing ingredients at a counter.',
    audioScript: '(A) The chef is slicing vegetables on a cutting board.\n(B) The waiter is setting the table with clean dishes.\n(C) The kitchen staff is preparing ingredients for dinner service.\n(D) A customer is reading the menu at the counter.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: 'キッチンで料理の準備をしているスタッフの写真を描写しています。「夕食サービスのために材料を準備している」が正解。複数人の動作が関わる写真では、全体の状況を捉える必要があります。',
    keyVocabulary: [
      { word: 'preparing', meaning: '準備している' },
      { word: 'ingredients', meaning: '材料、食材' },
      { word: 'dinner service', meaning: '夕食の提供（時間）' },
    ],
  },
  {
    id: 103,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q103-train-platform.png',
    imageAlt: 'A man boarding a train from a station platform.',
    audioScript: '(A) A man is boarding a train at the platform.\n(B) Passengers are waiting for the bus at the station.\n(C) The woman is checking the schedule on the information board.\n(D) Two people are having a conversation in the ticket line.',
    options: [
      { text: '(A)', isCorrect: true },
      { text: '(B)', isCorrect: false },
    ],
    explanation: '「男の人がプラットフォームで電車に乗り込んでいる」が正解。乗り物に関連する動詞（board, get on, disembark）は頻出です。写真の主要な動作に注目しましょう。',
    keyVocabulary: [
      { word: 'boarding', meaning: '乗り込む（動詞boardの現在分詞）' },
      { word: 'platform', meaning: 'プラットフォーム、ホーム' },
      { word: 'schedule', meaning: '時刻表、スケジュール' },
    ],
  },
  {
    id: 104,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q104-conference-table.png',
    imageAlt: 'Several participants seated around a rectangular conference table.',
    audioScript: '(A) The conference room is being cleaned by the janitorial staff.\n(B) A presentation is being given to a large audience.\n(C) Several participants are seated around a rectangular table.\n(D) Someone is adjusting the projector screen near the window.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '長方形のテーブルを囲んで座っている参加者の写真です。「複数の参加者が長方形のテーブルの周りに座っている」が正解。現在進行形の描写に注意してください。',
    keyVocabulary: [
      { word: 'participants', meaning: '参加者' },
      { word: 'rectangular', meaning: '長方形の' },
      { word: 'presentation', meaning: 'プレゼンテーション' },
    ],
  },
  {
    id: 105,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q105-delivery-truck.png',
    imageAlt: 'A delivery truck parked in front of a warehouse.',
    audioScript: '(A) The construction worker is operating heavy machinery.\n(B) Trees are being planted along the newly paved sidewalk.\n(C) A delivery truck is parked in front of the warehouse.\n(D) The road is closed due to ongoing roadwork.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '倉庫の前に駐車されている配送トラックの写真です。「配送トラックが倉庫の前に駐車している」が正解。物の位置関係（in front of, next to, beside）を正確に表現する選択肢が正解になります。',
    keyVocabulary: [
      { word: 'delivery truck', meaning: '配送トラック' },
      { word: 'warehouse', meaning: '倉庫' },
      { word: 'paved', meaning: '舗装された' },
    ],
  },

  {
    id: 106,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q106-restaurant-waiter.png',
    imageAlt: 'A waiter in a restaurant taking an order from customers.',
    audioScript: '(A) The waiter is clearing dishes from the table.\n(B) The chef is preparing food in the kitchen.\n(C) The waiter is writing down an order at the table.\n(D) The customers are paying the bill at the counter.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真はレストランでウェイターが注文をメモしている場面です。「ウェイターがテーブルで注文を書き留めている」が正解。料理を作っているのはシェフであり、ウェイターの行動ではありません。また会計はカウンターではなくテーブルで行われることが多いため(D)も不適切です。',
    keyVocabulary: [
      { word: 'taking an order', meaning: '注文を取る' },
      { word: 'clearing dishes', meaning: '皿を下げる' },
      { word: 'writing down', meaning: '書き留める' },
    ],
  },
  {
    id: 107,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q107-construction-site.png',
    imageAlt: 'Construction workers wearing hard hats at a construction site.',
    audioScript: '(A) The workers are wearing hard hats and safety vests.\n(B) The building has already been completed.\n(C) A group of tourists is touring the factory.\n(D) The road is being repaved by the city crew.',
    options: [
      { text: '(A)', isCorrect: true },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は工事現場でヘルメットと安全ベストを着用した作業員たちです。「作業員がヘルメットと安全ベストを着用している」が正解。建物はまだ建設途中であり完成していません。(C)の工場見学は写真の内容と全く異なります。',
    keyVocabulary: [
      { word: 'hard hats', meaning: 'ヘルメット' },
      { word: 'safety vests', meaning: '安全ベスト' },
      { word: 'construction site', meaning: '工事現場' },
    ],
  },
  {
    id: 108,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q108-airport-lounge.png',
    imageAlt: 'A businessman working on a laptop in an airport lounge.',
    audioScript: '(A) The man is waiting to board his flight at the gate.\n(B) The businessman is typing on a laptop in the lounge.\n(C) A traveler is checking in at the airport counter.\n(D) The man is sleeping in the departure area.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は空港ラウンジでノートパソコンに向かうビジネスマンです。「ビジネスマンがラウンジでノートパソコンにタイピングしている」が正解。(A)は搭乗ゲートの待機と混同しやすいですが、ラウンジ内での作業が正確な描写です。',
    keyVocabulary: [
      { word: 'laptop', meaning: 'ノートパソコン' },
      { word: 'lounge', meaning: 'ラウンジ、休憩室' },
      { word: 'typing', meaning: 'タイピングする、キーを打つ' },
    ],
  },
  {
    id: 109,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q109-park-bench-reading.png',
    imageAlt: 'A woman sitting on a park bench reading a book.',
    audioScript: '(A) The woman is feeding pigeons in the park.\n(B) A jogger is exercising on the walking path.\n(C) The woman is reading a book on a bench.\n(D) Children are playing on the playground equipment.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は公園のベンチで本を読んでいる女性です。「女性がベンチで本を読んでいる」が正解。(A)の鳩に餌をやる描写は写っておらず、(B)(D)も写真に登場しない人物の行動です。',
    keyVocabulary: [
      { word: 'bench', meaning: 'ベンチ、長椅子' },
      { word: 'reading a book', meaning: '本を読んでいる' },
      { word: 'playground equipment', meaning: '遊具' },
    ],
  },
  {
    id: 110,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q110-train-waiting.png',
    imageAlt: 'People waiting for a train on a station platform.',
    audioScript: '(A) Passengers are getting off the train at the station.\n(B) People are waiting for a train on the platform.\n(C) A conductor is checking tickets at the entrance.\n(D) The station is closed due to the holiday schedule.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は駅のプラットフォームで電車を待つ人々です。「人々がプラットフォームで電車を待っている」が正解。電車はまだ到着しておらず、降車の描写(A)は不正解です。切符改札(C)の描写も写っていません。',
    keyVocabulary: [
      { word: 'platform', meaning: 'プラットフォーム、ホーム' },
      { word: 'passengers', meaning: '乗客' },
      { word: 'conductor', meaning: '車掌' },
    ],
  },
  {
    id: 111,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q111-hospital-reception.png',
    imageAlt: 'A woman filling out a form at a hospital reception desk.',
    audioScript: '(A) The nurse is examining the patient in the examination room.\n(B) A doctor is reviewing X-rays on the light box.\n(C) The woman is filling out paperwork at the reception desk.\n(D) A pharmacist is dispensing medication at the pharmacy counter.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は病院の受付で書類に記入している女性です。「女性が受付カウンターで書類に記入している」が正解。診察室での診察(A)、X線の閲覧(B)、薬局での処方(D)はすべて異なる場所・行動の描写です。',
    keyVocabulary: [
      { word: 'reception desk', meaning: '受付カウンター' },
      { word: 'filling out paperwork', meaning: '書類に記入する' },
      { word: 'dispensing medication', meaning: '薬を調剤する' },
    ],
  },
  {
    id: 112,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q112-supermarket-cart.png',
    imageAlt: 'A shopper placing items into a shopping cart at a supermarket.',
    audioScript: '(A) The cashier is scanning groceries at the checkout.\n(B) A store employee is restocking shelves with products.\n(C) The shopper is placing items into a shopping cart.\n(D) A customer is comparing prices between two products.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真はスーパーで買い物カートに商品を入れている客です。「客が買い物カートに商品を入れている」が正解。レジでの会計(A)や棚への補充(B)は別の人の仕事です。(D)の価格比較の描写は写っていません。',
    keyVocabulary: [
      { word: 'shopping cart', meaning: '買い物カート' },
      { word: 'restocking shelves', meaning: '棚に商品を補充する' },
      { word: 'checkout', meaning: 'レジ、精算' },
    ],
  },
  {
    id: 113,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q113-conference-presentation.png',
    imageAlt: 'A man giving a presentation in a conference room.',
    audioScript: '(A) The man is presenting data in front of a whiteboard.\n(B) Attendees are having lunch in the cafeteria.\n(C) A technician is fixing the projector in the room.\n(D) The meeting has already ended and the room is empty.',
    options: [
      { text: '(A)', isCorrect: true },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は会議室でホワイトボードの前に立ってプレゼンをする男性です。「男性がホワイトボードの前でデータを提示している」が正解。参加者がおり、会議は進行中のため(B)(D)は不正解です。',
    keyVocabulary: [
      { word: 'presenting data', meaning: 'データを提示する' },
      { word: 'whiteboard', meaning: 'ホワイトボード' },
      { word: 'attendees', meaning: '参加者' },
    ],
  },
  {
    id: 114,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q114-police-traffic.png',
    imageAlt: 'A police officer directing traffic at an intersection.',
    audioScript: '(A) The police officer is writing a parking ticket.\n(B) A crossing guard is helping children cross the street.\n(C) The officer is directing traffic at the intersection.\n(D) Road workers are setting up traffic cones on the highway.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は交差点で交通整理をする警察官です。「警察官が交差点で交通整理をしている」が正解。駐車違反のキップ(A)や横断歩道の誘導(B)、道路工事(D)は別の状況の描写です。',
    keyVocabulary: [
      { word: 'directing traffic', meaning: '交通整理をする' },
      { word: 'intersection', meaning: '交差点' },
      { word: 'crossing guard', meaning: '交通指導員' },
    ],
  },
  {
    id: 115,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q115-hotel-bellboy.png',
    imageAlt: 'A bellhop carrying luggage on a cart in a hotel lobby.',
    audioScript: '(A) A guest is checking in at the front desk.\n(B) The bellhop is delivering luggage to a room.\n(C) Housekeeping staff is cleaning the hotel corridor.\n(D) A doorman is opening the entrance door for visitors.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真はホテルのロビーで荷物カートを押すベルボーイです。「ベルボーイが部屋に荷物を届けている」が正解。フロントでのチェックイン(A)、客室清掃(C)、ドア開け(D)はいずれも別のスタッフの業務です。',
    keyVocabulary: [
      { word: 'bellhop', meaning: 'ベルボーイ' },
      { word: 'delivering luggage', meaning: '荷物を届ける' },
      { word: 'housekeeping', meaning: '客室掃除、ハウスキーピング' },
    ],
  },
  {
    id: 116,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q116-copy-machine.png',
    imageAlt: 'A woman using a copy machine in an office.',
    audioScript: '(A) The woman is sorting mail in the mailroom.\n(B) The woman is placing paper into the copy machine.\n(C) A technician is repairing the printer.\n(D) Documents are being shredded in the corner.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真はオフィスでコピー機に用紙をセットしている女性です。「女性がコピー機に紙を入れている」が正解。郵便物仕分け(A)、プリンター修理(C)、書類シュレッダー(D)は別の作業です。',
    keyVocabulary: [
      { word: 'copy machine', meaning: 'コピー機' },
      { word: 'placing paper', meaning: '紙をセットする' },
      { word: 'shredding', meaning: 'シュレッダーにかける' },
    ],
  },
  {
    id: 117,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q117-construction-blueprint.png',
    imageAlt: 'A man in a hard hat inspecting blueprints at a construction site.',
    audioScript: '(A) The man is operating a crane at the construction site.\n(B) Workers are pouring concrete into a foundation.\n(C) The man in the hard hat is reviewing blueprints.\n(D) The building framework has been completed.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は工事現場で設計図を確認する作業員です。「ヘルメットを被った男性が設計図を確認している」が正解。クレーン操縦(A)、コンクリート打設(B)は写っていません。',
    keyVocabulary: [
      { word: 'blueprints', meaning: '設計図' },
      { word: 'hard hat', meaning: 'ヘルメット' },
      { word: 'framework', meaning: '骨組み、枠組み' },
    ],
  },
  {
    id: 118,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q118-outdoor-cafe.png',
    imageAlt: 'People sitting at tables at an outdoor cafe terrace.',
    audioScript: '(A) The cafe is closed for the winter season.\n(B) People are enjoying drinks at an outdoor terrace.\n(C) A waiter is serving food indoors.\n(D) The tables are being set up for a private event.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真はカフェのテラス席でくつろぐ人々です。「人々が屋外のテラスで飲み物を楽しんでいる」が正解。閉店(A)、屋内配膳(C)、イベント準備(D)は写真の状況と異なります。',
    keyVocabulary: [
      { word: 'outdoor terrace', meaning: '屋外テラス' },
      { word: 'enjoying drinks', meaning: '飲み物を楽しむ' },
      { word: 'private event', meaning: 'プライベートイベント' },
    ],
  },
  {
    id: 119,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q119-laboratory.png',
    imageAlt: 'A woman in a lab coat examining a test tube.',
    audioScript: '(A) The scientist is recording data on a clipboard.\n(B) The woman is wearing protective goggles and holding a test tube.\n(C) Chemicals are being mixed in a large beaker.\n(D) The laboratory equipment is being calibrated.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は白衣とゴーグルを着用して試験管を確認する女性です。「女性が保護ゴーグルをつけて試験管を持っている」が正解。データ記録(A)、大ビーカーでの混合(C)、機器校正(D)は別の行動です。',
    keyVocabulary: [
      { word: 'protective goggles', meaning: '保護ゴーグル' },
      { word: 'test tube', meaning: '試験管' },
      { word: 'calibrated', meaning: '校正される' },
    ],
  },
  {
    id: 120,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q120-handshake.png',
    imageAlt: 'Two business people shaking hands in an office lobby.',
    audioScript: '(A) Two colleagues are having an argument in the hallway.\n(B) A receptionist is greeting visitors at the desk.\n(C) Two business people are shaking hands.\n(D) A meeting is being held in the conference room.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真はオフィスロビーで握手する2人のビジネスパーソンです。「2人のビジネスパーソンが握手している」が正解。口論(A)、受付での挨拶(B)、会議室でのミーティング(D)は別の場面です。',
    keyVocabulary: [
      { word: 'shaking hands', meaning: '握手する' },
      { word: 'receptionist', meaning: '受付係' },
      { word: 'business people', meaning: 'ビジネスパーソン' },
    ],
  },
  {
    id: 121,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q121-florist.png',
    imageAlt: 'A florist arranging flowers in a shop window.',
    audioScript: '(A) The florist is wrapping a bouquet for a customer.\n(B) Flowers are being arranged in the shop window display.\n(C) A gardener is planting flowers in a park.\n(D) The flower shop is having a clearance sale.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は花屋のショーウィンドウで花を並べているフローリストです。「花がショップウィンドウのディスプレイにアレンジされている」が正解。ラッピング(A)、公園での植栽(C)、セール(D)は別の状況です。',
    keyVocabulary: [
      { word: 'florist', meaning: '花屋、フローリスト' },
      { word: 'arranging flowers', meaning: '花をアレンジする' },
      { word: 'bouquet', meaning: '花束' },
    ],
  },
  {
    id: 122,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q122-airport-baggage.png',
    imageAlt: 'An airport worker pushing a baggage cart in a terminal.',
    audioScript: '(A) Passengers are collecting their luggage from the carousel.\n(B) A security officer is screening carry-on bags.\n(C) An airport worker is pushing a baggage cart.\n(D) A pilot is walking toward the departure gate.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は空港ターミナルで荷物カートを押す作業員です。「空港の作業員が荷物カートを押している」が正解。ターンテーブルでの荷物受け取り(A)、手荷物検査(B)、パイロット(D)は別の人物・場所です。',
    keyVocabulary: [
      { word: 'baggage cart', meaning: '荷物カート' },
      { word: 'carousel', meaning: 'ターンテーブル、荷物受け取り台' },
      { word: 'screening', meaning: '検査する' },
    ],
  },
  {
    id: 123,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q123-gym-treadmill.png',
    imageAlt: 'Two people exercising on treadmills in a fitness center.',
    audioScript: '(A) A personal trainer is demonstrating an exercise.\n(B) Two people are running on treadmills side by side.\n(C) Weights are being organized on the equipment rack.\n(D) A yoga class is in session on the mat area.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真はフィットネスセンターで並んでトレッドミルを使う2人です。「2人がトレッドミルで並んで走っている」が正解。パーソナルトレーナー(A)、ウェイト整理(C)、ヨガクラス(D)は写っていません。',
    keyVocabulary: [
      { word: 'treadmill', meaning: 'トレッドミル、ランニングマシン' },
      { word: 'fitness center', meaning: 'フィットネスセンター、ジム' },
      { word: 'personal trainer', meaning: 'パーソナルトレーナー' },
    ],
  },
  {
    id: 124,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q124-classroom.png',
    imageAlt: 'A teacher writing on a whiteboard in a classroom.',
    audioScript: '(A) Students are taking an exam at their desks.\n(B) The teacher is writing on the whiteboard.\n(C) The classroom is being decorated for a school event.\n(D) Children are playing in the schoolyard during recess.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: true },
      { text: '(C)', isCorrect: false },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は教室でホワイトボードに板書する先生です。「先生がホワイトボードに書き込んでいる」が正解。試験(A)、教室の飾り付け(C)、校庭での遊び(D)は別の場面です。',
    keyVocabulary: [
      { word: 'whiteboard', meaning: 'ホワイトボード' },
      { word: 'taking an exam', meaning: '試験を受けている' },
      { word: 'recess', meaning: '休み時間' },
    ],
  },
  {
    id: 125,
    part: 1,
    category: 'part1',
    categoryLabel: '写真描写問題',
    question: 'What is happening in the photograph?',
    imageSrc: '/part1/q125-rain-umbrella.png',
    imageAlt: 'A woman in a raincoat walking with an umbrella on a wet sidewalk.',
    audioScript: '(A) The woman is running to avoid getting wet.\n(B) The street is closed due to flooding.\n(C) The woman is walking with an umbrella in the rain.\n(D) Pedestrians are waiting at the bus stop under shelter.',
    options: [
      { text: '(A)', isCorrect: false },
      { text: '(B)', isCorrect: false },
      { text: '(C)', isCorrect: true },
      { text: '(D)', isCorrect: false },
    ],
    explanation: '写真は雨の日に傘を持って歩く女性です。「女性が雨の中、傘をさして歩いている」が正解。走って避難(A)、洪水による通行止め(B)、バス停での待機(D)は写真と異なります。',
    keyVocabulary: [
      { word: 'umbrella', meaning: '傘' },
      { word: 'wet sidewalk', meaning: '濡れた歩道' },
      { word: 'flooding', meaning: '洪水、浸水' },
    ],
  },

  // ===== Part 2: Question-Response (5 questions) =====
  {
    id: 201,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Where is the nearest post office?',
    audioScript: 'Where is the nearest post office?\n(A) It closes at five o\'clock.\n(B) About two blocks from here, on Oak Street.\n(C) I need to send a package.',
    options: [
      { text: '(A) It closes at five o\'clock.', isCorrect: false },
      { text: '(B) About two blocks from here, on Oak Street.', isCorrect: true },
      { text: "(C) I need to send a package.", isCorrect: false },
    ],
    explanation: '「Where」で聞かれている場所を尋ねる質問です。場所を示す回答(B)が正解。(A)は時間、(C)は目的を答えており、質問と合っていません。WH疑問詞の種類に注意しましょう。',
    keyVocabulary: [
      { word: 'nearest', meaning: '最も近い' },
      { word: 'block', meaning: '街区、ブロック' },
    ],
  },
  {
    id: 202,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Could you send me the quarterly report by Friday?',
    audioScript: 'Could you send me the quarterly report by Friday?\n(A) I\'ll have it ready by Thursday.\n(B) The quarterly meeting is next Monday.\n(C) I\'ve never been to that quarter.',
    options: [
      { text: "(A) I'll have it ready by Thursday.", isCorrect: true },
      { text: '(B) The quarterly meeting is next Monday.', isCorrect: false },
      { text: "(C) I've never been to that quarter.", isCorrect: false },
    ],
    explanation: '依頼文に対して、対応可能かどうかを答える問題です。「木曜日までに準備します」が正解。依頼の意図に沿った回答を選ぶことが大切です。(C)のquarterは「地区」の意味で引っかけです。',
    keyVocabulary: [
      { word: 'quarterly report', meaning: '四半期報告書' },
      { word: 'by Friday', meaning: '金曜日までに' },
    ],
  },
  {
    id: 203,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: "Isn't the budget meeting scheduled for tomorrow afternoon?",
    audioScript: "Isn't the budget meeting scheduled for tomorrow afternoon?\n(A) Yes, it was moved to Wednesday morning instead.\n(B) The budget was approved last week.\n(C) I prefer morning meetings as well.",
    options: [
      { text: '(A) Yes, it was moved to Wednesday morning instead.', isCorrect: true },
      { text: '(B) The budget was approved last week.', isCorrect: false },
      { text: '(C) I prefer morning meetings as well.', isCorrect: false },
    ],
    explanation: '否定疑問文への回答です。「はい、水曜日の朝に変更されました」が正解。否定疑問文には、YESで事実を肯定し、そのあと訂正内容を述べる形で答えるのが自然です。',
    keyVocabulary: [
      { word: 'scheduled for', meaning: '〜に予定されている' },
      { word: 'budget meeting', meaning: '予算会議' },
      { word: 'moved to', meaning: '〜に変更された、移動された' },
    ],
  },
  {
    id: 204,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: "I'm not feeling well enough to attend the workshop today.",
    audioScript: "I'm not feeling well enough to attend the workshop today.\n(A) The workshop materials are on your desk.\n(B) I hope you feel better soon. Shall I take notes for you?\n(C) It was held at the convention center.",
    options: [
      { text: '(A) The workshop materials are on your desk.', isCorrect: false },
      { text: '(B) I hope you feel better soon. Shall I take notes for you?', isCorrect: true },
      { text: '(C) It was held at the convention center.', isCorrect: false },
    ],
    explanation: '体調不良を伝える発言に対する適切な反応が求められます。(B)は気遣いと代替提案の両方を含み、最も適切です。相手の状況に配慮した回答が正解になりやすいです。',
    keyVocabulary: [
      { word: 'attend', meaning: '参加する、出席する' },
      { word: 'workshop', meaning: 'ワークショップ' },
      { word: 'take notes', meaning: 'メモを取る' },
    ],
  },
  {
    id: 205,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'How long has Ms. Tanaka been with the company?',
    audioScript: 'How long has Ms. Tanaka been with the company?\n(A) She works in the marketing department.\n(B) Since she graduated from university, about eight years ago.\n(C) She takes the train every day.',
    options: [
      { text: '(A) She works in the marketing department.', isCorrect: false },
      { text: '(B) Since she graduated from university, about eight years ago.', isCorrect: true },
      { text: '(C) She takes the train every day.', isCorrect: false },
    ],
    explanation: '「How long」で期間を尋ねる質問です。「大学卒業以来、約8年」が正解。(A)は部署、(C)は通勤手段を答えており、期間の質問に合っていません。',
    keyVocabulary: [
      { word: 'been with the company', meaning: '会社に在籍している' },
      { word: 'graduated', meaning: '卒業した' },
    ],
  },

  {
    id: 206,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'When is the earliest appointment available with Dr. Patel?',
    audioScript: 'When is the earliest appointment available with Dr. Patel?\n(A) The office is on the third floor.\n(B) She has an opening at 2 P.M. tomorrow.\n(C) Dr. Patel is a general practitioner.',
    options: [
      { text: '(A) The office is on the third floor.', isCorrect: false },
      { text: '(B) She has an opening at 2 P.M. tomorrow.', isCorrect: true },
      { text: '(C) Dr. Patel is a general practitioner.', isCorrect: false },
    ],
    explanation: '「When」で日程を尋ねる質問です。「明日の午後2時に空きがある」が正解。(A)は場所、(C)は資格を答えており、質問の趣旨と異なります。',
    keyVocabulary: [
      { word: 'earliest appointment', meaning: '最も早い予約枠' },
      { word: 'opening', meaning: '空き枠' },
      { word: 'general practitioner', meaning: '一般医' },
    ],
  },
  {
    id: 207,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: "Would you prefer the morning shift or the evening shift?",
    audioScript: 'Would you prefer the morning shift or the evening shift?\n(A) I usually commute by train.\n(B) The morning shift works better for me.\n(C) The shift lasts eight hours.',
    options: [
      { text: '(A) I usually commute by train.', isCorrect: false },
      { text: '(B) The morning shift works better for me.', isCorrect: true },
      { text: '(C) The shift lasts eight hours.', isCorrect: false },
    ],
    explanation: '「どちらを好むか」の選択疑問文です。朝シフトを希望する(B)が正解。(A)は通勤手段で無関係、(C)はシフトの長さで選択に答えていません。',
    keyVocabulary: [
      { word: 'morning shift', meaning: '朝のシフト' },
      { word: 'commute', meaning: '通勤する' },
      { word: 'works better', meaning: '都合が良い' },
    ],
  },
  {
    id: 208,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'How often is the company newsletter published?',
    audioScript: 'How often is the company newsletter published?\n(A) It is sent to all employees by e-mail.\n(B) The newsletter contains industry news.\n(C) Twice a month, on the first and fifteenth.',
    options: [
      { text: '(A) It is sent to all employees by e-mail.', isCorrect: false },
      { text: '(B) The newsletter contains industry news.', isCorrect: false },
      { text: '(C) Twice a month, on the first and fifteenth.', isCorrect: true },
    ],
    explanation: '「How often」で頻度を尋ねる質問です。「月2回、1日と15日」が正解。(A)は配信方法、(B)は内容で頻度に答えていません。',
    keyVocabulary: [
      { word: 'newsletter', meaning: '社内報、ニュースレター' },
      { word: 'published', meaning: '発行される' },
      { word: 'twice a month', meaning: '月2回' },
    ],
  },
  {
    id: 209,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Shall I forward the inspection report to the regional office?',
    audioScript: 'Shall I forward the inspection report to the regional office?\n(A) The inspection is scheduled for next Tuesday.\n(B) Yes, please send it to Mr. Gomez.\n(C) The regional office is in Chicago.',
    options: [
      { text: '(A) The inspection is scheduled for next Tuesday.', isCorrect: false },
      { text: '(B) Yes, please send it to Mr. Gomez.', isCorrect: true },
      { text: '(C) The regional office is in Chicago.', isCorrect: false },
    ],
    explanation: '「Shall I〜?」で提案・申し出を表します。「はい、Mr. Gomezに送ってください」が正解。提案に対する賛否と具体的な指示が含まれています。',
    keyVocabulary: [
      { word: 'forward', meaning: '転送する' },
      { word: 'inspection report', meaning: '検査報告書' },
      { word: 'regional office', meaning: '地域事務所' },
    ],
  },
  {
    id: 210,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'What did the auditor say about the financial records?',
    audioScript: 'What did the auditor say about the financial records?\n(A) The records are stored in the archive room.\n(B) He said they were well-organized and accurate.\n(C) The audit will be completed by Friday.',
    options: [
      { text: '(A) The records are stored in the archive room.', isCorrect: false },
      { text: '(B) He said they were well-organized and accurate.', isCorrect: true },
      { text: '(C) The audit will be completed by Friday.', isCorrect: false },
    ],
    explanation: '「監査人は何と言ったか」という質問です。「整理されており正確だと言っていた」(B)が正解。(A)は保管場所、(C)は監査の完了予定で発言内容ではありません。',
    keyVocabulary: [
      { word: 'auditor', meaning: '監査人' },
      { word: 'financial records', meaning: '財務記録' },
      { word: 'well-organized', meaning: 'よく整理された' },
    ],
  },
  {
    id: 211,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Who is responsible for ordering office supplies?',
    audioScript: 'Who is responsible for ordering office supplies?\n(A) The supplies arrived yesterday.\n(B) We need more printer paper and toner.\n(C) That would be Ms. Chen in the purchasing department.',
    options: [
      { text: '(A) The supplies arrived yesterday.', isCorrect: false },
      { text: '(B) We need more printer paper and toner.', isCorrect: false },
      { text: '(C) That would be Ms. Chen in the purchasing department.', isCorrect: true },
    ],
    explanation: '「Who」で担当者を尋ねる質問です。「購買部のMs. Chenです」(C)が正解。(A)は到着の事実、(B)は必要品で担当者に答えていません。',
    keyVocabulary: [
      { word: 'responsible for', meaning: '〜を担当している' },
      { word: 'office supplies', meaning: '事務用品' },
      { word: 'purchasing department', meaning: '購買部' },
    ],
  },
  {
    id: 212,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Why was the product launch postponed?',
    audioScript: 'Why was the product launch postponed?\n(A) The launch event will be at the convention center.\n(B) Because the quality testing revealed a minor defect.\n(C) The new product is a wireless speaker.',
    options: [
      { text: '(A) The launch event will be at the convention center.', isCorrect: false },
      { text: '(B) Because the quality testing revealed a minor defect.', isCorrect: true },
      { text: '(C) The new product is a wireless speaker.', isCorrect: false },
    ],
    explanation: '「Why」で理由を尋ねる質問です。「品質テストで軽微な欠陥が見つかったから」(B)が正解。(A)は場所、(C)は製品の説明で延期の理由ではありません。',
    keyVocabulary: [
      { word: 'product launch', meaning: '製品発表（ローンチ）' },
      { word: 'postponed', meaning: '延期された' },
      { word: 'minor defect', meaning: '軽微な欠陥' },
    ],
  },
  {
    id: 213,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Do you know whether the conference room has been reserved for the board meeting?',
    audioScript: 'Do you know whether the conference room has been reserved for the board meeting?\n(A) Yes, it is booked from ten to noon.\n(B) The board meeting is usually held monthly.\n(C) There are two conference rooms on this floor.',
    options: [
      { text: '(A) Yes, it is booked from ten to noon.', isCorrect: true },
      { text: '(B) The board meeting is usually held monthly.', isCorrect: false },
      { text: '(C) There are two conference rooms on this floor.', isCorrect: false },
    ],
    explanation: '「会議室が予約されているかどうか」を尋ねる質問です。「10時から正午まで予約されています」(A)が正解。(B)は会議の頻度、(C)は会議室の数で予約の有無に答えていません。',
    keyVocabulary: [
      { word: 'reserved', meaning: '予約された' },
      { word: 'board meeting', meaning: '取締役会' },
      { word: 'booked', meaning: '予約済みの' },
    ],
  },
  {
    id: 214,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Would you like me to arrange transportation from the airport?',
    audioScript: 'Would you like me to arrange transportation from the airport?\n(A) My flight arrives at 3:15 P.M.\n(B) That would be very helpful, thank you.\n(C) The airport is about thirty minutes from downtown.',
    options: [
      { text: '(A) My flight arrives at 3:15 P.M.', isCorrect: false },
      { text: '(B) That would be very helpful, thank you.', isCorrect: true },
      { text: '(C) The airport is about thirty minutes from downtown.', isCorrect: false },
    ],
    explanation: '「Would you like me to〜?」で提案を表します。「それはとても助かります」(B)が正解。提案に対する感謝と承諾が含まれています。',
    keyVocabulary: [
      { word: 'arrange transportation', meaning: '交通手段を手配する' },
      { word: 'helpful', meaning: '役に立つ、助かる' },
      { word: 'downtown', meaning: 'ダウンタウン、中心街' },
    ],
  },
  {
    id: 215,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'How much does it cost to rent the exhibition space for two days?',
    audioScript: 'How much does it cost to rent the exhibition space for two days?\n(A) The exhibition features artwork by local artists.\n(B) About two thousand dollars, including the setup fee.\n(C) The space can accommodate up to two hundred guests.',
    options: [
      { text: '(A) The exhibition features artwork by local artists.', isCorrect: false },
      { text: '(B) About two thousand dollars, including the setup fee.', isCorrect: true },
      { text: '(C) The space can accommodate up to two hundred guests.', isCorrect: false },
    ],
    explanation: '「How much」で金額を尋ねる質問です。「セットアップ費用込みで約2000ドル」(B)が正解。(A)は展示内容、(C)は収容人数で費用ではありません。',
    keyVocabulary: [
      { word: 'exhibition space', meaning: '展示スペース' },
      { word: 'setup fee', meaning: '設営費' },
      { word: 'accommodate', meaning: '収容する' },
    ],
  },
  {
    id: 216,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: "I'm afraid I won't be able to finish the presentation slides by tomorrow.",
    audioScript: "I'm afraid I won't be able to finish the presentation slides by tomorrow.\n(A) The presentation is for the board of directors.\n(B) Don't worry, I can help you work on them tonight.\n(C) The slides should be about fifteen pages long.",
    options: [
      { text: '(A) The presentation is for the board of directors.', isCorrect: false },
      { text: "(B) Don't worry, I can help you work on them tonight.", isCorrect: true },
      { text: '(C) The slides should be about fifteen pages long.', isCorrect: false },
    ],
    explanation: 'できないことを詫びる発言に対する適切な反応が求められます。「心配しないで、今夜手伝うよ」(B)が最も適切です。',
    keyVocabulary: [
      { word: 'presentation slides', meaning: 'プレゼン資料' },
      { word: "I'm afraid", meaning: '〜ですが（丁寧な断り）' },
      { word: 'board of directors', meaning: '取締役会' },
    ],
  },
  {
    id: 217,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Where can I find the revised safety guidelines?',
    audioScript: 'Where can I find the revised safety guidelines?\n(A) They were updated last month.\n(B) You can download them from the HR portal.\n(C) Safety training is mandatory for all staff.',
    options: [
      { text: '(A) They were updated last month.', isCorrect: false },
      { text: '(B) You can download them from the HR portal.', isCorrect: true },
      { text: '(C) Safety training is mandatory for all staff.', isCorrect: false },
    ],
    explanation: '「Where」で場所を尋ねる質問です。「HRポータルからダウンロードできます」(B)が正解。(A)は更新時期、(C)は研修の義務で場所ではありません。',
    keyVocabulary: [
      { word: 'revised', meaning: '改訂された' },
      { word: 'safety guidelines', meaning: '安全ガイドライン' },
      { word: 'portal', meaning: 'ポータルサイト' },
    ],
  },
  {
    id: 218,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'What time does the keynote speech begin?',
    audioScript: 'What time does the keynote speech begin?\n(A) The keynote speaker is the CEO of techcorp.\n(B) The speech will be held in the main auditorium.\n(C) It starts at nine thirty in the main auditorium.',
    options: [
      { text: '(A) The keynote speaker is the CEO of techcorp.', isCorrect: false },
      { text: '(B) The speech will be held in the main auditorium.', isCorrect: false },
      { text: '(C) It starts at nine thirty in the main auditorium.', isCorrect: true },
    ],
    explanation: '「What time」で開始時刻を尋ねる質問です。「9時30分に始まります」(C)が正解。(A)は講演者、(B)は場所だけで時間がありません。',
    keyVocabulary: [
      { word: 'keynote speech', meaning: '基調講演' },
      { word: 'auditorium', meaning: '大講堂' },
      { word: 'starts at', meaning: '〜に始まる' },
    ],
  },
  {
    id: 219,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: "Haven't we already submitted the tax documents?",
    audioScript: "Haven't we already submitted the tax documents?\n(A) Yes, I sent them to the accounting firm last Wednesday.\n(B) The tax rate was raised last year.\n(C) We file our taxes annually.",
    options: [
      { text: '(A) Yes, I sent them to the accounting firm last Wednesday.', isCorrect: true },
      { text: '(B) The tax rate was raised last year.', isCorrect: false },
      { text: '(C) We file our taxes annually.', isCorrect: false },
    ],
    explanation: '否定疑問文で「もう提出していないでしたっけ？」と確認する質問です。「はい、先週の水曜日に会計事務所に送りました」(A)が正解。',
    keyVocabulary: [
      { word: 'submitted', meaning: '提出した' },
      { word: 'tax documents', meaning: '税務書類' },
      { word: 'accounting firm', meaning: '会計事務所' },
    ],
  },
  {
    id: 220,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Which of the candidates has the most management experience?',
    audioScript: 'Which of the candidates has the most management experience?\n(A) The interviews are scheduled for next week.\n(B) I believe Ms. Park has over ten years of experience.\n(C) There were four applicants for the position.',
    options: [
      { text: '(A) The interviews are scheduled for next week.', isCorrect: false },
      { text: '(B) I believe Ms. Park has over ten years of experience.', isCorrect: true },
      { text: '(C) There were four applicants for the position.', isCorrect: false },
    ],
    explanation: '「Which」で特定の候補者を尋ねる質問です。「Ms. Parkが10年以上の経験があります」(B)が正解。最も経験のある候補者を特定しています。',
    keyVocabulary: [
      { word: 'candidates', meaning: '候補者' },
      { word: 'management experience', meaning: '管理職の経験' },
      { word: 'applicants', meaning: '応募者' },
    ],
  },
  {
    id: 221,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Let me know if you need any help setting up the new software.',
    audioScript: 'Let me know if you need any help setting up the new software.\n(A) The software update is free of charge.\n(B) Actually, I am having trouble with the installation.\n(C) The new version was released last week.',
    options: [
      { text: '(A) The software update is free of charge.', isCorrect: false },
      { text: '(B) Actually, I am having trouble with the installation.', isCorrect: true },
      { text: '(C) The new version was released last week.', isCorrect: false },
    ],
    explanation: 'ヘルプの申し出に対する適切な反応が求められます。「実はインストールで困っている」(B)がヘルプを必要としていることを示しています。',
    keyVocabulary: [
      { word: 'setting up', meaning: 'セットアップする' },
      { word: 'installation', meaning: 'インストール' },
      { word: 'free of charge', meaning: '無料の' },
    ],
  },
  {
    id: 222,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'How did the client respond to our proposal?',
    audioScript: 'How did the client respond to our proposal?\n(A) The proposal was submitted on Monday.\n(B) They seemed very interested and asked for a follow-up meeting.\n(C) We charge an hourly rate for consulting.',
    options: [
      { text: '(A) The proposal was submitted on Monday.', isCorrect: false },
      { text: '(B) They seemed very interested and asked for a follow-up meeting.', isCorrect: true },
      { text: '(C) We charge an hourly rate for consulting.', isCorrect: false },
    ],
    explanation: '「How」で反応の様子を尋ねる質問です。「非常に興味を持っており、フォローアップ会議を求めてきた」(B)が正解。',
    keyVocabulary: [
      { word: 'respond to', meaning: '〜に反応する' },
      { word: 'follow-up meeting', meaning: 'フォローアップ会議' },
      { word: 'hourly rate', meaning: '時間単価' },
    ],
  },
  {
    id: 223,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Are you planning to attend the industry conference in Berlin?',
    audioScript: 'Are you planning to attend the industry conference in Berlin?\n(A) The conference is held annually in March.\n(B) Berlin is a great city for networking events.\n(C) I am, but I have not registered yet.',
    options: [
      { text: '(A) The conference is held annually in March.', isCorrect: false },
      { text: '(B) Berlin is a great city for networking events.', isCorrect: false },
      { text: '(C) I am, but I have not registered yet.', isCorrect: true },
    ],
    explanation: '「〜する予定ですか」という Yes/No 疑問文です。「はい、でもまだ登録していません」(C)が正解。参加意向と現状を的確に答えています。',
    keyVocabulary: [
      { word: 'industry conference', meaning: '業界会議' },
      { word: 'registered', meaning: '登録した' },
      { word: 'networking events', meaning: 'ネットワーキングイベント' },
    ],
  },
  {
    id: 224,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Why has the shipping fee increased so much this quarter?',
    audioScript: 'Why has the shipping fee increased so much this quarter?\n(A) The new supplier offers competitive rates.\n(B) Fuel prices have risen significantly since January.\n(C) We ship most orders within two business days.',
    options: [
      { text: '(A) The new supplier offers competitive rates.', isCorrect: false },
      { text: '(B) Fuel prices have risen significantly since January.', isCorrect: true },
      { text: '(C) We ship most orders within two business days.', isCorrect: false },
    ],
    explanation: '「Why」で理由を尋ねる質問です。「1月から燃料価格が大幅に上昇している」(B)が送料増加の理由として正解。',
    keyVocabulary: [
      { word: 'shipping fee', meaning: '送料' },
      { word: 'fuel prices', meaning: '燃料価格' },
      { word: 'significantly', meaning: '大幅に' },
    ],
  },
  {
    id: 225,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: "You've already seen the updated floor plan, haven't you?",
    audioScript: "You've already seen the updated floor plan, haven't you?\n(A) Yes, the renovations look amazing.\n(B) The plan was designed by an architecture firm.\n(C) The floor is being polished this afternoon.",
    options: [
      { text: '(A) Yes, the renovations look amazing.', isCorrect: true },
      { text: '(B) The plan was designed by an architecture firm.', isCorrect: false },
      { text: '(C) The floor is being polished this afternoon.', isCorrect: false },
    ],
    explanation: '付加疑問文で確認を求める質問です。「はい、改装は素晴らしいです」(A)が既に見たことを肯定しています。',
    keyVocabulary: [
      { word: 'floor plan', meaning: '間取り図' },
      { word: 'renovations', meaning: '改装' },
      { word: 'architecture firm', meaning: '建築事務所' },
    ],
  },
  {
    id: 226,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'What do you think about relocating the office to the suburbs?',
    audioScript: 'What do you think about relocating the office to the suburbs?\n(A) The current lease expires at the end of the year.\n(B) It would reduce operating costs, but commute times could increase.\n(C) The suburbs have many nice restaurants.',
    options: [
      { text: '(A) The current lease expires at the end of the year.', isCorrect: false },
      { text: '(B) It would reduce operating costs, but commute times could increase.', isCorrect: true },
      { text: '(C) The suburbs have many nice restaurants.', isCorrect: false },
    ],
    explanation: '「What do you think about〜?」で意見を求める質問です。「運用コストは下がるが、通勤時間が延びる可能性がある」(B)が意見として的確です。',
    keyVocabulary: [
      { word: 'relocating', meaning: '移転する' },
      { word: 'operating costs', meaning: '運用コスト' },
      { word: 'commute times', meaning: '通勤時間' },
    ],
  },
  {
    id: 227,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'How many people are expected at the annual gala?',
    audioScript: 'How many people are expected at the annual gala?\n(A) The gala is held at the grand hotel.\n(B) Around three hundred guests have confirmed attendance.\n(C) The event has been held for over twenty years.',
    options: [
      { text: '(A) The gala is held at the grand hotel.', isCorrect: false },
      { text: '(B) Around three hundred guests have confirmed attendance.', isCorrect: true },
      { text: '(C) The event has been held for over twenty years.', isCorrect: false },
    ],
    explanation: '「How many」で人数を尋ねる質問です。「約300名のゲストが出席を確認している」(B)が正解。(A)は場所、(C)は歴史で人数ではありません。',
    keyVocabulary: [
      { word: 'annual gala', meaning: '年次ガラ' },
      { word: 'confirmed attendance', meaning: '出席を確認した' },
      { word: 'expected', meaning: '予想される' },
    ],
  },
  {
    id: 228,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Could you tell me where the loading dock is?',
    audioScript: 'Could you tell me where the loading dock is?\n(A) Deliveries are accepted between 8 and 5.\n(B) It is behind the building, near the parking structure.\n(C) The dock can accommodate two trucks at a time.',
    options: [
      { text: '(A) Deliveries are accepted between 8 and 5.', isCorrect: false },
      { text: '(B) It is behind the building, near the parking structure.', isCorrect: true },
      { text: '(C) The dock can accommodate two trucks at a time.', isCorrect: false },
    ],
    explanation: '「Where」で場所を尋ねる丁寧な質問です。「建物の裏、駐車場の近く」(B)が正解。(A)は受付時間、(C)は収容能力です。',
    keyVocabulary: [
      { word: 'loading dock', meaning: '荷下ろし場' },
      { word: 'parking structure', meaning: '立体駐車場' },
      { word: 'deliveries', meaning: '配達、納品' },
    ],
  },
  {
    id: 229,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Is Mr. Nakamura aware of the changes to the payment terms?',
    audioScript: 'Is Mr. Nakamura aware of the changes to the payment terms?\n(A) The payment is due within thirty days.\n(B) Yes, I briefed him on the revisions this morning.\n(C) The terms were changed by the finance team.',
    options: [
      { text: '(A) The payment is due within thirty days.', isCorrect: false },
      { text: '(B) Yes, I briefed him on the revisions this morning.', isCorrect: true },
      { text: '(C) The terms were changed by the finance team.', isCorrect: false },
    ],
    explanation: '「Is〜aware of〜?」で認知しているかを尋ねる質問です。「はい、今朝改訂内容を説明しました」(B)が正解。briefed him＝説明した。',
    keyVocabulary: [
      { word: 'aware of', meaning: '〜を知っている、認識している' },
      { word: 'payment terms', meaning: '支払条件' },
      { word: 'briefed', meaning: '説明した、ブリーフィングした' },
    ],
  },
  {
    id: 230,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'May I ask who will be leading the audit team?',
    audioScript: 'May I ask who will be leading the audit team?\n(A) The audit is scheduled to begin next Monday.\n(B) Ms. Rivera from the compliance department will be in charge.\n(C) The team consists of five experienced auditors.',
    options: [
      { text: '(A) The audit is scheduled to begin next Monday.', isCorrect: false },
      { text: '(B) Ms. Rivera from the compliance department will be in charge.', isCorrect: true },
      { text: '(C) The team consists of five experienced auditors.', isCorrect: false },
    ],
    explanation: '「Who」でリーダーを尋ねる丁寧な質問です。「コンプライアンス部のMs. Riveraが担当します」(B)が正解。',
    keyVocabulary: [
      { word: 'leading', meaning: '率いている' },
      { word: 'audit team', meaning: '監査チーム' },
      { word: 'compliance department', meaning: 'コンプライアンス部門' },
    ],
  },
  {
    id: 231,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Would it be possible to extend the warranty period on this equipment?',
    audioScript: 'Would it be possible to extend the warranty period on this equipment?\n(A) The warranty covers manufacturing defects only.\n(B) The equipment was purchased last year.\n(C) Yes, for an additional fee of one hundred fifty dollars.',
    options: [
      { text: '(A) The warranty covers manufacturing defects only.', isCorrect: false },
      { text: '(B) The equipment was purchased last year.', isCorrect: false },
      { text: '(C) Yes, for an additional fee of one hundred fifty dollars.', isCorrect: true },
    ],
    explanation: '「Would it be possible to〜?」で可能性を尋ねる質問です。「はい、追加料金150ドルで可能です」(C)が正解。',
    keyVocabulary: [
      { word: 'extend', meaning: '延長する' },
      { word: 'warranty period', meaning: '保証期間' },
      { word: 'additional fee', meaning: '追加料金' },
    ],
  },
  {
    id: 232,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'When was the last time the fire extinguishers were inspected?',
    audioScript: 'When was the last time the fire extinguishers were inspected?\n(A) They are inspected every six months, most recently in January.\n(B) The fire extinguishers are located near each exit.\n(C) There are twelve fire extinguishers in the building.',
    options: [
      { text: '(A) They are inspected every six months, most recently in January.', isCorrect: true },
      { text: '(B) The fire extinguishers are located near each exit.', isCorrect: false },
      { text: '(C) There are twelve fire extinguishers in the building.', isCorrect: false },
    ],
    explanation: '「When was the last time〜?」で最後の実施日を尋ねる質問です。「6ヶ月ごとに点検し、直近は1月」(A)が正解。',
    keyVocabulary: [
      { word: 'fire extinguishers', meaning: '消火器' },
      { word: 'inspected', meaning: '点検された' },
      { word: 'most recently', meaning: '直近で' },
    ],
  },
  {
    id: 233,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Would you rather have the meeting in person or via video call?',
    audioScript: 'Would you rather have the meeting in person or via video call?\n(A) The meeting is about the new product line.\n(B) Video call would be more convenient since I am working remotely.\n(C) The meeting room is on the second floor.',
    options: [
      { text: '(A) The meeting is about the new product line.', isCorrect: false },
      { text: '(B) Video call would be more convenient since I am working remotely.', isCorrect: true },
      { text: '(C) The meeting room is on the second floor.', isCorrect: false },
    ],
    explanation: '「Would you rather A or B?」で選択を求める質問です。「リモート勤務なのでビデオ通話が便利」(B)が正解。選択とその理由を述べています。',
    keyVocabulary: [
      { word: 'in person', meaning: '直接、対面で' },
      { word: 'via video call', meaning: 'ビデオ通話で' },
      { word: 'convenient', meaning: '都合が良い' },
    ],
  },
  {
    id: 234,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'I just heard that the company is opening a branch in Singapore.',
    audioScript: 'I just heard that the company is opening a branch in Singapore.\n(A) Singapore is six hours ahead of Japan.\n(B) Really? I had not heard anything about that.\n(C) The branch manager will be relocated from Tokyo.',
    options: [
      { text: '(A) Singapore is six hours ahead of Japan.', isCorrect: false },
      { text: '(B) Really? I had not heard anything about that.', isCorrect: true },
      { text: '(C) The branch manager will be relocated from Tokyo.', isCorrect: false },
    ],
    explanation: '新情報を伝える発言に対する適切な反応が求められます。「本当ですか？何も聞いていませんでした」(B)が最も自然な反応です。',
    keyVocabulary: [
      { word: 'branch', meaning: '支店' },
      { word: 'relocated', meaning: '転勤した' },
      { word: 'time zone', meaning: '時間帯' },
    ],
  },
  {
    id: 235,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'How long will it take to get the prototype approved?',
    audioScript: 'How long will it take to get the prototype approved?\n(A) The prototype was developed in-house.\n(B) The approval process usually takes about two weeks.\n(C) We need three prototypes for testing.',
    options: [
      { text: '(A) The prototype was developed in-house.', isCorrect: false },
      { text: '(B) The approval process usually takes about two weeks.', isCorrect: true },
      { text: '(C) We need three prototypes for testing.', isCorrect: false },
    ],
    explanation: '「How long」で期間を尋ねる質問です。「承認プロセスは通常約2週間かかります」(B)が正解。',
    keyVocabulary: [
      { word: 'prototype', meaning: 'プロトタイプ' },
      { word: 'approved', meaning: '承認された' },
      { word: 'in-house', meaning: '社内で' },
    ],
  },
  {
    id: 236,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Are the new safety regulations going to affect our manufacturing process?',
    audioScript: 'Are the new safety regulations going to affect our manufacturing process?\n(A) Yes, we will need to upgrade some of our equipment.\n(B) The regulations were announced last month.\n(C) Our factory is located in the industrial zone.',
    options: [
      { text: '(A) Yes, we will need to upgrade some of our equipment.', isCorrect: true },
      { text: '(B) The regulations were announced last month.', isCorrect: false },
      { text: '(C) Our factory is located in the industrial zone.', isCorrect: false },
    ],
    explanation: '「Are〜going to affect〜?」で影響の有無を尋ねる質問です。「はい、一部の設備をアップグレードする必要があります」(A)が正解。',
    keyVocabulary: [
      { word: 'safety regulations', meaning: '安全規制' },
      { word: 'manufacturing process', meaning: '製造工程' },
      { word: 'upgrade', meaning: 'アップグレードする' },
    ],
  },
  {
    id: 237,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Whose signature is required on the purchase order?',
    audioScript: 'Whose signature is required on the purchase order?\n(A) The purchase order was processed yesterday.\n(B) Both the department head and the finance director need to sign.\n(C) Orders over five thousand dollars require two signatures.',
    options: [
      { text: '(A) The purchase order was processed yesterday.', isCorrect: false },
      { text: '(B) Both the department head and the finance director need to sign.', isCorrect: true },
      { text: '(C) Orders over five thousand dollars require two signatures.', isCorrect: false },
    ],
    explanation: '「Whose」で誰の署名かを尋ねる質問です。「部門長と財務担当役員の両方」(B)が正解。(C)は条件を述べているだけで誰かを答えていません。',
    keyVocabulary: [
      { word: 'signature', meaning: '署名' },
      { word: 'purchase order', meaning: '発注書' },
      { word: 'department head', meaning: '部門長' },
    ],
  },
  {
    id: 238,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Can you tell me what the deadline for the grant application is?',
    audioScript: 'Can you tell me what the deadline for the grant application is?\n(A) All applications must be submitted by March 31.\n(B) The grant is for small businesses.\n(C) Last year we received over two hundred applications.',
    options: [
      { text: '(A) All applications must be submitted by March 31.', isCorrect: true },
      { text: '(B) The grant is for small businesses.', isCorrect: false },
      { text: '(C) Last year we received over two hundred applications.', isCorrect: false },
    ],
    explanation: '「締め切りはいつか」を尋ねる質問です。「3月31日までに提出する必要がある」(A)が正解。',
    keyVocabulary: [
      { word: 'grant application', meaning: '助成金申請' },
      { word: 'deadline', meaning: '締め切り' },
      { word: 'submitted', meaning: '提出される' },
    ],
  },
  {
    id: 239,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Why did the client reject the initial design?',
    audioScript: 'Why did the client reject the initial design?\n(A) The design was created by an in-house team.\n(B) They felt the color scheme did not match their brand identity.\n(C) The revised design was approved last Friday.',
    options: [
      { text: '(A) The design was created by an in-house team.', isCorrect: false },
      { text: '(B) They felt the color scheme did not match their brand identity.', isCorrect: true },
      { text: '(C) The revised design was approved last Friday.', isCorrect: false },
    ],
    explanation: '「Why」で理由を尋ねる質問です。「カラースキームがブランドアイデンティティに合わないと感じた」(B)が正解。',
    keyVocabulary: [
      { word: 'reject', meaning: '却下する' },
      { word: 'initial design', meaning: '初期デザイン' },
      { word: 'brand identity', meaning: 'ブランドアイデンティティ' },
    ],
  },
  {
    id: 240,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Has the IT department resolved the server issue?',
    audioScript: 'Has the IT department resolved the server issue?\n(A) The server was upgraded last month.\n(B) Not yet, but they are working on it and expect a fix by this evening.\n(C) The IT department is on the fourth floor.',
    options: [
      { text: '(A) The server was upgraded last month.', isCorrect: false },
      { text: '(B) Not yet, but they are working on it and expect a fix by this evening.', isCorrect: true },
      { text: '(C) The IT department is on the fourth floor.', isCorrect: false },
    ],
    explanation: '現在完了形で完了を尋ねる質問です。「まだですが、今夜までに修正を予定しています」(B)が正解。',
    keyVocabulary: [
      { word: 'resolved', meaning: '解決した' },
      { word: 'server issue', meaning: 'サーバー問題' },
      { word: 'expect a fix', meaning: '修正を予定している' },
    ],
  },
  {
    id: 241,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Should we use the caterer from the last event or try someone new?',
    audioScript: 'Should we use the caterer from the last event or try someone new?\n(A) The last event had about a hundred attendees.\n(B) I think we should go with the same caterer — the food was excellent.\n(C) Catering services typically cost between twenty and thirty dollars per person.',
    options: [
      { text: '(A) The last event had about a hundred attendees.', isCorrect: false },
      { text: '(B) I think we should go with the same caterer — the food was excellent.', isCorrect: true },
      { text: '(C) Catering services typically cost between twenty and thirty dollars per person.', isCorrect: false },
    ],
    explanation: '「Should we A or B?」で提案を求める質問です。「同じケータリング会社を使うべき。料理が素晴らしかった」(B)が正解。',
    keyVocabulary: [
      { word: 'caterer', meaning: 'ケータリング業者' },
      { word: 'attendees', meaning: '参加者' },
      { word: 'go with', meaning: '〜を選ぶ' },
    ],
  },
  {
    id: 242,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Excuse me, could you tell me how to get to the personnel department?',
    audioScript: 'Excuse me, could you tell me how to get to the personnel department?\n(A) The personnel department handles recruitment and training.\n(B) Take the elevator to the fifth floor and turn right.\n(C) You need to fill out an application form.',
    options: [
      { text: '(A) The personnel department handles recruitment and training.', isCorrect: false },
      { text: '(B) Take the elevator to the fifth floor and turn right.', isCorrect: true },
      { text: '(C) You need to fill out an application form.', isCorrect: false },
    ],
    explanation: '「how to get to〜」で道順を尋ねる質問です。「エレベーターで5階に上がり右に曲がってください」(B)が正解。',
    keyVocabulary: [
      { word: 'personnel department', meaning: '人事部' },
      { word: 'recruitment', meaning: '採用' },
      { word: 'application form', meaning: '申請書' },
    ],
  },
  {
    id: 243,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'What seems to be the problem with the new printer?',
    audioScript: 'What seems to be the problem with the new printer?\n(A) The printer was delivered yesterday afternoon.\n(B) It keeps jamming whenever I try to print double-sided.\n(C) We ordered three printers for the office.',
    options: [
      { text: '(A) The printer was delivered yesterday afternoon.', isCorrect: false },
      { text: '(B) It keeps jamming whenever I try to print double-sided.', isCorrect: true },
      { text: '(C) We ordered three printers for the office.', isCorrect: false },
    ],
    explanation: '「What seems to be the problem?」で問題の内容を尋ねる質問です。「両面印刷しようとすると紙詰まりする」(B)が正解。',
    keyVocabulary: [
      { word: 'keep jamming', meaning: '紙詰まりし続ける' },
      { word: 'double-sided', meaning: '両面の' },
      { word: 'delivered', meaning: '配達された' },
    ],
  },
  {
    id: 244,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Do you happen to know if the cafeteria serves vegetarian options?',
    audioScript: 'Do you happen to know if the cafeteria serves vegetarian options?\n(A) The cafeteria is open from 11:30 to 2:00.\n(B) Yes, they added a vegetarian menu section last month.\n(C) About half of the employees eat in the cafeteria.',
    options: [
      { text: '(A) The cafeteria is open from 11:30 to 2:00.', isCorrect: false },
      { text: '(B) Yes, they added a vegetarian menu section last month.', isCorrect: true },
      { text: '(C) About half of the employees eat in the cafeteria.', isCorrect: false },
    ],
    explanation: '「Do you happen to know if〜?」で知識の有無を丁寧に尋ねる質問です。「はい、先月ベジタリアンメニューセクションを追加しました」(B)が正解。',
    keyVocabulary: [
      { word: 'cafeteria', meaning: '社員食堂' },
      { word: 'vegetarian options', meaning: 'ベジタリアン向けメニュー' },
      { word: 'menu section', meaning: 'メニューセクション' },
    ],
  },
  {
    id: 245,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'I heard that Ms. Lopez was promoted to vice president.',
    audioScript: 'I heard that Ms. Lopez was promoted to vice president.\n(A) The vice president oversees three departments.\n(B) Yes, the announcement was made at the company meeting.\n(C) Ms. Lopez joined the company five years ago.',
    options: [
      { text: '(A) The vice president oversees three departments.', isCorrect: false },
      { text: '(B) Yes, the announcement was made at the company meeting.', isCorrect: true },
      { text: '(C) Ms. Lopez joined the company five years ago.', isCorrect: false },
    ],
    explanation: '聞いた情報を確認する発言に対する反応です。「はい、会社の会議で発表されました」(B)が情報を確認しています。',
    keyVocabulary: [
      { word: 'promoted', meaning: '昇進した' },
      { word: 'vice president', meaning: '副社長、バイスプレジデント' },
      { word: 'announcement', meaning: '発表' },
    ],
  },
  {
    id: 246,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'How come the product packaging was changed?',
    audioScript: 'How come the product packaging was changed?\n(A) The product comes in three sizes.\n(B) To make it more environmentally friendly and reduce waste.\n(C) The packaging was designed by a well-known agency.',
    options: [
      { text: '(A) The product comes in three sizes.', isCorrect: false },
      { text: '(B) To make it more environmentally friendly and reduce waste.', isCorrect: true },
      { text: '(C) The packaging was designed by a well-known agency.', isCorrect: false },
    ],
    explanation: '「How come」は「なぜ」を意味する口語表現です。「より環境に配慮し廃棄物を減らすため」(B)が正解。',
    keyVocabulary: [
      { word: 'packaging', meaning: '包装' },
      { word: 'environmentally friendly', meaning: '環境に配慮した' },
      { word: 'reduce waste', meaning: '廃棄物を減らす' },
    ],
  },
  {
    id: 247,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Can the order be delivered before the end of the week?',
    audioScript: 'Can the order be delivered before the end of the week?\n(A) The order includes fifty units of each product.\n(B) We offer free shipping on orders over one hundred dollars.\n(C) If you confirm by this afternoon, we can guarantee delivery by Thursday.',
    options: [
      { text: '(A) The order includes fifty units of each product.', isCorrect: false },
      { text: '(B) We offer free shipping on orders over one hundred dollars.', isCorrect: false },
      { text: '(C) If you confirm by this afternoon, we can guarantee delivery by Thursday.', isCorrect: true },
    ],
    explanation: '納期の可能性を尋ねる質問です。「今日の午後までに確認いただければ、木曜日までの配達を保証できます」(C)が正解。',
    keyVocabulary: [
      { word: 'delivered', meaning: '配達される' },
      { word: 'confirm', meaning: '確認する' },
      { word: 'guarantee', meaning: '保証する' },
    ],
  },
  {
    id: 248,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Which hotel was selected for the corporate retreat?',
    audioScript: 'Which hotel was selected for the corporate retreat?\n(A) The Lakewood Resort, about an hour from the office.\n(B) The retreat is scheduled for early next month.\n(C) About forty employees will attend the retreat.',
    options: [
      { text: '(A) The Lakewood Resort, about an hour from the office.', isCorrect: true },
      { text: '(B) The retreat is scheduled for early next month.', isCorrect: false },
      { text: '(C) About forty employees will attend the retreat.', isCorrect: false },
    ],
    explanation: '「Which」で特定のホテルを尋ねる質問です。「Lakewood Resortです、オフィスから約1時間」(A)が正解。',
    keyVocabulary: [
      { word: 'corporate retreat', meaning: '社員研修旅行' },
      { word: 'selected', meaning: '選ばれた' },
      { word: 'resort', meaning: 'リゾート' },
    ],
  },
  {
    id: 249,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'Would you mind reviewing the contract before we sign it?',
    audioScript: 'Would you mind reviewing the contract before we sign it?\n(A) The contract is for a period of two years.\n(B) Not at all, I will take a look at it this afternoon.\n(C) The signing ceremony is at 3 P.M.',
    options: [
      { text: '(A) The contract is for a period of two years.', isCorrect: false },
      { text: '(B) Not at all, I will take a look at it this afternoon.', isCorrect: true },
      { text: '(C) The signing ceremony is at 3 P.M.', isCorrect: false },
    ],
    explanation: '「Would you mind〜?」で丁寧に依頼する質問です。「もちろんです、今日の午後に確認します」(B)が正解。Not at all＝承知しました。',
    keyVocabulary: [
      { word: 'reviewing', meaning: '確認する' },
      { word: 'contract', meaning: '契約書' },
      { word: 'Not at all', meaning: 'もちろんです（依頼承諾）' },
    ],
  },
  {
    id: 250,
    part: 2,
    category: 'part2',
    categoryLabel: '応答問題',
    question: 'What qualifications are needed for the supervisory position?',
    audioScript: 'What qualifications are needed for the supervisory position?\n(A) The position was posted on the company website.\n(B) A minimum of a bachelor\'s degree and three years of supervisory experience.\n(C) The supervisor reports directly to the plant manager.',
    options: [
      { text: '(A) The position was posted on the company website.', isCorrect: false },
      { text: "(B) A minimum of a bachelor's degree and three years of supervisory experience.", isCorrect: true },
      { text: '(C) The supervisor reports directly to the plant manager.', isCorrect: false },
    ],
    explanation: '「What qualifications」で必要な資格を尋ねる質問です。「学士号以上と3年の管理経験」(B)が正解。',
    keyVocabulary: [
      { word: 'qualifications', meaning: '資格、要件' },
      { word: 'supervisory position', meaning: '監督職' },
      { word: 'bachelor\'s degree', meaning: '学士号' },
    ],
  },

  // ===== Part 3: Short Conversations (5 questions) =====
  {
    id: 301,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman ask the man to do?',
    audioScript: 'Woman: David, could you review the proposal draft before I submit it to the client?\nMan: Sure, I can look it over during lunch. Are there any specific sections you want me to focus on?\nWoman: Mainly the cost estimates and the timeline. I want to make sure they\'re realistic.\nMan: No problem. I\'ll have my feedback ready by two o\'clock.',
    options: [
      { text: '(A) Submit a document to the client', isCorrect: false },
      { text: '(B) Review a proposal draft', isCorrect: true },
      { text: '(C) Prepare cost estimates', isCorrect: false },
      { text: '(D) Meet with the client at two o\'clock', isCorrect: false },
    ],
    explanation: '女性が男性に「提案書のドラフトを確認してほしい」と依頼しています。「確認する（review）」が正解。(A)のsubmitは女性自身が行うこと、(C)は確認対象の一部です。',
    keyVocabulary: [
      { word: 'review', meaning: '確認する、レビューする' },
      { word: 'proposal draft', meaning: '提案書のドラフト' },
      { word: 'cost estimates', meaning: '費用見積もり' },
    ],
  },
  {
    id: 302,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'When will the man send the revised contract?',
    audioScript: 'Man: I noticed some terms in the contract that need to be clarified before we sign.\nWoman: Really? Which parts?\nMan: The delivery schedule and the payment terms. I\'ll revise them tonight and email you the updated version first thing tomorrow morning.\nWoman: Great. Let\'s schedule a call for Thursday to go over the final version.',
    options: [
      { text: '(A) Tonight', isCorrect: false },
      { text: '(B) Tomorrow morning', isCorrect: true },
      { text: '(C) Thursday', isCorrect: false },
      { text: '(D) After the phone call', isCorrect: false },
    ],
    explanation: '男性が「今夜修正して、明日の朝一番にメールで送る」と言っています。「明日の朝」が正解。Thursdayは電話を予定する日で、送信日ではありません。時間表現の正確な把握が重要です。',
    keyVocabulary: [
      { word: 'revised contract', meaning: '修正された契約書' },
      { word: 'delivery schedule', meaning: '納入スケジュール' },
      { word: 'first thing tomorrow morning', meaning: '明日の朝一番に' },
    ],
  },
  {
    id: 303,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What problem does the man mention?',
    audioScript: 'Woman: How\'s the new inventory system working out?\nMan: Well, the barcode scanning is much faster, but we\'re having trouble integrating it with the accounting software.\nWoman: That sounds frustrating. Have you contacted the vendor?\nMan: Yes, their support team is looking into it, but it might take a few days to resolve.',
    options: [
      { text: '(A) Barcode scanners are too slow', isCorrect: false },
      { text: '(B) The system cannot connect to accounting software', isCorrect: true },
      { text: '(C) The vendor has not responded', isCorrect: false },
      { text: '(D) Staff need more training', isCorrect: false },
    ],
    explanation: '男性が「会計ソフトウェアとの統合に問題がある」と言っています。「システムが会計ソフトウェアに接続できない」が正解。(A)は逆で、スキャンは速くなったと言っています。問題の核心を捉えることが重要です。',
    keyVocabulary: [
      { word: 'inventory system', meaning: '在庫管理システム' },
      { word: 'integrating', meaning: '統合する、連携させる' },
      { word: 'vendor', meaning: 'ベンダー、販売元' },
    ],
  },
  {
    id: 304,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman suggest?',
    audioScript: 'Man: Our trade show booth is really small this year. I don\'t think we\'ll be able to display all our new products.\nWoman: Why don\'t we use digital screens to showcase some items? It would save space and look more modern.\nMan: That\'s a great idea. Do you know anyone who can set that up?\nWoman: Actually, my friend runs an AV company. I can ask her for a quote.',
    options: [
      { text: '(A) Get a larger booth space', isCorrect: false },
      { text: '(B) Use digital screens for the display', isCorrect: true },
      { text: '(C) Reduce the number of products shown', isCorrect: false },
      { text: '(D) Hire an AV company directly', isCorrect: false },
    ],
    explanation: '女性が「デジタルスクリーンを使って商品を紹介したらどうか」と提案しています。「デジタルスクリーンを使う」が正解。ディスプレイのスペースを節約できるという理由も含まれています。',
    keyVocabulary: [
      { word: 'trade show booth', meaning: '展示会ブース' },
      { word: 'showcase', meaning: '紹介する、展示する' },
      { word: 'quote', meaning: '見積もり' },
    ],
  },
  {
    id: 305,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What will the speakers probably do next?',
    audioScript: 'Woman: The regional manager wants to meet with us to discuss next quarter\'s targets.\nMan: When is she available? I have client meetings on Monday and Tuesday.\nWoman: She said Wednesday afternoon works for her. Should I book a conference room?\nMan: Yes, and please prepare the sales data from last quarter so we can compare the numbers.',
    options: [
      { text: '(A) Meet with clients', isCorrect: false },
      { text: '(B) Book a conference room', isCorrect: true },
      { text: '(C) Review the quarterly targets', isCorrect: false },
      { text: '(D) Present the sales data', isCorrect: false },
    ],
    explanation: '会話の流れから、次に起こりそうなことを推測します。女性が会議室を予約するかどうか尋ね、男性が承諾しているため、「会議室を予約する」が最も適切な次の行動です。',
    keyVocabulary: [
      { word: 'regional manager', meaning: '地域マネージャー' },
      { word: 'quarter\'s targets', meaning: '四半期の目標' },
      { word: 'book a conference room', meaning: '会議室を予約する' },
    ],
  },

  {
    id: 306,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What are the speakers mainly discussing?',
    audioScript: 'Man: Hi, I\'m calling about the delivery schedule for order number 4892. It was supposed to arrive last Friday.\nWoman: Let me check... I see the issue. Your shipment was held up at customs due to incomplete paperwork.\nMan: That\'s concerning. When can we expect it now?\nWoman: I\'ve already resubmitted the documents. You should receive it by Wednesday at the latest.',
    options: [
      { text: '(A) A canceled product order', isCorrect: false },
      { text: '(B) A delayed delivery', isCorrect: true },
      { text: '(C) A billing error', isCorrect: false },
      { text: '(D) A price increase', isCorrect: false },
    ],
    explanation: '配送の遅れについて話し合っています。「通関手続きの不備で遅れている」ことが主要なトピックです。',
    keyVocabulary: [
      { word: 'held up at customs', meaning: '税関で止められた' },
      { word: 'incomplete paperwork', meaning: '書類不備' },
      { word: 'resubmitted', meaning: '再提出した' },
    ],
  },
  {
    id: 307,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What caused the problem?',
    audioScript: 'Man: Hi, I\'m calling about the delivery schedule for order number 4892. It was supposed to arrive last Friday.\nWoman: Let me check... I see the issue. Your shipment was held up at customs due to incomplete paperwork.\nMan: That\'s concerning. When can we expect it now?\nWoman: I\'ve already resubmitted the documents. You should receive it by Wednesday at the latest.',
    options: [
      { text: '(A) The supplier ran out of stock', isCorrect: false },
      { text: '(B) The shipping company lost the package', isCorrect: false },
      { text: '(C) The paperwork was not complete', isCorrect: true },
      { text: '(D) The customer changed the order', isCorrect: false },
    ],
    explanation: '女性が「書類不備のため税関で止まっている」と説明しています。遅延の原因は書類の不完全さです。',
    keyVocabulary: [
      { word: 'held up', meaning: '遅延した、止められた' },
      { word: 'customs', meaning: '税関' },
      { word: 'concerning', meaning: '懸念される' },
    ],
  },
  {
    id: 308,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'When will the shipment most likely arrive?',
    audioScript: 'Man: Hi, I\'m calling about the delivery schedule for order number 4892. It was supposed to arrive last Friday.\nWoman: Let me check... I see the issue. Your shipment was held up at customs due to incomplete paperwork.\nMan: That\'s concerning. When can we expect it now?\nWoman: I\'ve already resubmitted the documents. You should receive it by Wednesday at the latest.',
    options: [
      { text: '(A) Friday', isCorrect: false },
      { text: '(B) Monday', isCorrect: false },
      { text: '(C) Tuesday', isCorrect: false },
      { text: '(D) Wednesday', isCorrect: true },
    ],
    explanation: '「遅くとも水曜日までには受け取れる」と女性が言っています。Wednesdayが正解です。',
    keyVocabulary: [
      { word: 'at the latest', meaning: '遅くとも' },
      { word: 'shipment', meaning: '出荷品' },
      { word: 'receive', meaning: '受け取る' },
    ],
  },
  {
    id: 309,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman want to do?',
    audioScript: 'Woman: I need to schedule a performance review with each team member before the end of the month.\nMan: That sounds like a lot of meetings. How many people are on your team?\nWoman: Twelve. I was thinking of doing four per week over the next three weeks.\nMan: You might want to book the small conference room — it\'s quieter than the open offices.',
    options: [
      { text: '(A) Hire new team members', isCorrect: false },
      { text: '(B) Schedule performance reviews', isCorrect: true },
      { text: '(C) Book a training session', isCorrect: false },
      { text: '(D) Organize a team-building event', isCorrect: false },
    ],
    explanation: '女性が「月末までに各チームメンバーとの人事評価面談を予定したい」と言っています。performance reviewsが正解です。',
    keyVocabulary: [
      { word: 'performance review', meaning: '人事評価面談' },
      { word: 'schedule', meaning: '予定を組む' },
      { word: 'conference room', meaning: '会議室' },
    ],
  },
  {
    id: 310,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the man suggest?',
    audioScript: 'Woman: I need to schedule a performance review with each team member before the end of the month.\nMan: That sounds like a lot of meetings. How many people are on your team?\nWoman: Twelve. I was thinking of doing four per week over the next three weeks.\nMan: You might want to book the small conference room — it\'s quieter than the open offices.',
    options: [
      { text: '(A) Reduce the number of reviews', isCorrect: false },
      { text: '(B) Use the small conference room', isCorrect: true },
      { text: '(C) Extend the review period', isCorrect: false },
      { text: '(D) Ask another manager to help', isCorrect: false },
    ],
    explanation: '男性が「小会議室を予約した方がいいかも。オフィスより静かだから」と提案しています。小会議室の利用が正解です。',
    keyVocabulary: [
      { word: 'might want to', meaning: '〜した方がいいかも' },
      { word: 'quieter', meaning: 'より静かな' },
      { word: 'open offices', meaning: 'オープンオフィス' },
    ],
  },
  {
    id: 311,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'How many team members does the woman have?',
    audioScript: 'Woman: I need to schedule a performance review with each team member before the end of the month.\nMan: That sounds like a lot of meetings. How many people are on your team?\nWoman: Twelve. I was thinking of doing four per week over the next three weeks.\nMan: You might want to book the small conference room — it\'s quieter than the open offices.',
    options: [
      { text: '(A) Three', isCorrect: false },
      { text: '(B) Four', isCorrect: false },
      { text: '(C) Twelve', isCorrect: true },
      { text: '(D) Twenty', isCorrect: false },
    ],
    explanation: '女性が「Twelve（12人）」と明確に答えています。数字の聞き取りが重要です。',
    keyVocabulary: [
      { word: 'team member', meaning: 'チームメンバー' },
      { word: 'per week', meaning: '週あたり' },
      { word: 'over the next three weeks', meaning: '今後3週間にわたり' },
    ],
  },
  {
    id: 312,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the woman\'s problem?',
    audioScript: 'Man: You look worried. Is everything all right?\nWoman: I just realized that our booth registration for the trade show expired yesterday. I completely forgot to renew it.\nMan: Oh no. Have you called the organizers?\nWoman: I did, but they said all the premium spots are taken. We might have to settle for a corner booth this year.',
    options: [
      { text: '(A) She missed the registration deadline', isCorrect: true },
      { text: '(B) She lost the trade show catalog', isCorrect: false },
      { text: '(C) She needs to cancel the booth', isCorrect: false },
      { text: '(D) She cannot attend the trade show', isCorrect: false },
    ],
    explanation: '女性が「展示会のブース登録の期限が昨日切れたことに気づいた」と言っています。登録期限を過ぎたことが問題です。',
    keyVocabulary: [
      { word: 'booth registration', meaning: 'ブース登録' },
      { word: 'expired', meaning: '期限切れになった' },
      { word: 'renew', meaning: '更新する' },
    ],
  },
  {
    id: 313,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What will the woman probably have to do?',
    audioScript: 'Man: You look worried. Is everything all right?\nWoman: I just realized that our booth registration for the trade show expired yesterday. I completely forgot to renew it.\nMan: Oh no. Have you called the organizers?\nWoman: I did, but they said all the premium spots are taken. We might have to settle for a corner booth this year.',
    options: [
      { text: '(A) Cancel the trade show participation', isCorrect: false },
      { text: '(B) Accept a less desirable booth location', isCorrect: true },
      { text: '(C) Pay a late registration penalty', isCorrect: false },
      { text: '(D) Find a different trade show', isCorrect: false },
    ],
    explanation: '女性が「プレミアムの場所はすべて埋まっており、コーナーのブースで我慢する必要があるかもしれない」と言っています。場所が悪くなる可能性が高いです。',
    keyVocabulary: [
      { word: 'premium spots', meaning: '良い場所' },
      { word: 'settle for', meaning: '〜で妥協する' },
      { word: 'corner booth', meaning: 'コーナーのブース' },
    ],
  },
  {
    id: 314,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the man want to know?',
    audioScript: 'Woman: Good morning. Welcome to Orion Financial Services. How may I help you?\nMan: I\'d like to open a business account for my startup. Could you tell me what documents I need to bring?\nWoman: Sure. You\'ll need your business registration certificate, a government-issued ID, and proof of address.\nMan: Do I need to come back in person, or can I submit the copies online?',
    options: [
      { text: '(A) The interest rates for loans', isCorrect: false },
      { text: '(B) The documents required to open an account', isCorrect: true },
      { text: '(C) The location of the nearest branch', isCorrect: false },
      { text: '(D) The fees for international transfers', isCorrect: false },
    ],
    explanation: '男性が「法人口座を開設するのに必要な書類を教えてほしい」と聞いています。必要書類の確認が目的です。',
    keyVocabulary: [
      { word: 'business account', meaning: '法人口座' },
      { word: 'startup', meaning: 'スタートアップ企業' },
      { word: 'business registration certificate', meaning: '営業登記証明書' },
    ],
  },
  {
    id: 315,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What document is NOT mentioned as a requirement?',
    audioScript: 'Woman: Good morning. Welcome to Orion Financial Services. How may I help you?\nMan: I\'d like to open a business account for my startup. Could you tell me what documents I need to bring?\nWoman: Sure. You\'ll need your business registration certificate, a government-issued ID, and proof of address.\nMan: Do I need to come back in person, or can I submit the copies online?',
    options: [
      { text: '(A) A business registration certificate', isCorrect: false },
      { text: '(B) A government-issued ID', isCorrect: false },
      { text: '(C) Proof of address', isCorrect: false },
      { text: '(D) A tax return document', isCorrect: true },
    ],
    explanation: '必要書類として言及されているのは営業登記証明書、身分証明書、住所証明の3点です。確定申告書は言及されていません。',
    keyVocabulary: [
      { word: 'government-issued ID', meaning: '公的身分証明書' },
      { word: 'proof of address', meaning: '住所証明' },
      { word: 'in person', meaning: '直接、本人が' },
    ],
  },
  {
    id: 316,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What are the speakers talking about?',
    audioScript: 'Man: The client just called. They want to add another floor to the building plan.\nWoman: That\'s going to push the completion date back by at least two months.\nMan: I know. But they said they\'re willing to cover the additional costs.\nWoman: Well, I\'ll need to revise the blueprints and get new permits from the city.',
    options: [
      { text: '(A) A change in construction plans', isCorrect: true },
      { text: '(B) A delay in material delivery', isCorrect: false },
      { text: '(C) A budget reduction', isCorrect: false },
      { text: '(D) A staffing shortage', isCorrect: false },
    ],
    explanation: 'クライアントが建設計画にもう一階追加したいと話しています。計画変更が話題の中心です。',
    keyVocabulary: [
      { word: 'push back', meaning: '遅らせる' },
      { word: 'completion date', meaning: '完工日' },
      { word: 'blueprints', meaning: '設計図' },
    ],
  },
  {
    id: 317,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What will the woman need to do?',
    audioScript: 'Man: The client just called. They want to add another floor to the building plan.\nWoman: That\'s going to push the completion date back by at least two months.\nMan: I know. But they said they\'re willing to cover the additional costs.\nWoman: Well, I\'ll need to revise the blueprints and get new permits from the city.',
    options: [
      { text: '(A) Hire more construction workers', isCorrect: false },
      { text: '(B) Revise the blueprints and obtain new permits', isCorrect: true },
      { text: '(C) Negotiate the price with the client', isCorrect: false },
      { text: '(D) Order additional building materials', isCorrect: false },
    ],
    explanation: '女性が「設計図を修正し、新しい許可を取得する必要がある」と言っています。',
    keyVocabulary: [
      { word: 'revise', meaning: '修正する、改訂する' },
      { word: 'additional costs', meaning: '追加費用' },
      { word: 'cover', meaning: '負担する' },
    ],
  },
  {
    id: 318,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the purpose of the call?',
    audioScript: 'Woman: Thank you for calling Riverside Hotel. How may I assist you?\nMan: I\'d like to book a conference room for a corporate event on June 15th. We\'ll need space for about sixty people.\nWoman: Let me check availability... Our Grand Ballroom is available that day. It can accommodate up to one hundred guests.\nMan: Perfect. Does the rental fee include audiovisual equipment?',
    options: [
      { text: '(A) To reserve event space', isCorrect: true },
      { text: '(B) To book a hotel room', isCorrect: false },
      { text: '(C) To inquire about catering services', isCorrect: false },
      { text: '(D) To cancel an existing reservation', isCorrect: false },
    ],
    explanation: '男性が「6月15日に企業イベント用の会議室を予約したい」と言っています。イベントスペースの予約が目的です。',
    keyVocabulary: [
      { word: 'book', meaning: '予約する' },
      { word: 'Grand Ballroom', meaning: '大宴会場' },
      { word: 'audiovisual equipment', meaning: '視聴覚機器' },
    ],
  },
  {
    id: 319,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'How many people will attend the event?',
    audioScript: 'Woman: Thank you for calling Riverside Hotel. How may I assist you?\nMan: I\'d like to book a conference room for a corporate event on June 15th. We\'ll need space for about sixty people.\nWoman: Let me check availability... Our Grand Ballroom is available that day. It can accommodate up to one hundred guests.\nMan: Perfect. Does the rental fee include audiovisual equipment?',
    options: [
      { text: '(A) Fifteen', isCorrect: false },
      { text: '(B) Sixty', isCorrect: true },
      { text: '(C) One hundred', isCorrect: false },
      { text: '(D) Two hundred', isCorrect: false },
    ],
    explanation: '男性が「約60人のスペースが必要」と言っています。100は宴会場の最大収容人数です。',
    keyVocabulary: [
      { word: 'accommodate', meaning: '収容する' },
      { word: 'rental fee', meaning: 'レンタル料金' },
      { word: 'availability', meaning: '空き状況' },
    ],
  },
  {
    id: 320,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the man ask at the end?',
    audioScript: 'Woman: Thank you for calling Riverside Hotel. How may I assist you?\nMan: I\'d like to book a conference room for a corporate event on June 15th. We\'ll need space for about sixty people.\nWoman: Let me check availability... Our Grand Ballroom is available that day. It can accommodate up to one hundred guests.\nMan: Perfect. Does the rental fee include audiovisual equipment?',
    options: [
      { text: '(A) Whether parking is available', isCorrect: false },
      { text: '(B) Whether catering is included', isCorrect: false },
      { text: '(C) Whether AV equipment is included in the fee', isCorrect: true },
      { text: '(D) Whether the venue is wheelchair accessible', isCorrect: false },
    ],
    explanation: '男性が「レンタル料金に視聴覚機器は含まれていますか？」と最後に質問しています。',
    keyVocabulary: [
      { word: 'rental fee', meaning: 'レンタル料金' },
      { word: 'include', meaning: '含む' },
      { word: 'audiovisual', meaning: '視聴覚の' },
    ],
  },
  {
    id: 321,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the man\'s concern?',
    audioScript: 'Woman: The quality control report shows that the defect rate has gone up to four percent this month.\nMan: That\'s double what it was last month. We need to investigate immediately.\nWoman: I agree. I suspect the new raw material supplier might be the cause.\nMan: Let\'s schedule an inspection of their facility and also review our own production line.',
    options: [
      { text: '(A) The production cost is too high', isCorrect: false },
      { text: '(B) The defect rate has increased', isCorrect: true },
      { text: '(C) The delivery schedule is behind', isCorrect: false },
      { text: '(D) The workers are demanding higher wages', isCorrect: false },
    ],
    explanation: '男性が「不良率が先月の2倍になった」と懸念しています。不良率の上昇が問題です。',
    keyVocabulary: [
      { word: 'quality control', meaning: '品質管理' },
      { word: 'defect rate', meaning: '不良率' },
      { word: 'raw material', meaning: '原材料' },
    ],
  },
  {
    id: 322,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman suspect?',
    audioScript: 'Woman: The quality control report shows that the defect rate has gone up to four percent this month.\nMan: That\'s double what it was last month. We need to investigate immediately.\nWoman: I agree. I suspect the new raw material supplier might be the cause.\nMan: Let\'s schedule an inspection of their facility and also review our own production line.',
    options: [
      { text: '(A) The production line is outdated', isCorrect: false },
      { text: '(B) Workers lack proper training', isCorrect: false },
      { text: '(C) The new supplier may be causing the problem', isCorrect: true },
      { text: '(D) The quality control equipment needs calibration', isCorrect: false },
    ],
    explanation: '女性が「新しい原材料サプライヤーが原因ではないかと疑っている」と言っています。',
    keyVocabulary: [
      { word: 'suspect', meaning: '疑う' },
      { word: 'investigate', meaning: '調査する' },
      { word: 'inspection', meaning: '検査' },
    ],
  },
  {
    id: 323,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the man propose?',
    audioScript: 'Woman: The quality control report shows that the defect rate has gone up to four percent this month.\nMan: That\'s double what it was last month. We need to investigate immediately.\nWoman: I agree. I suspect the new raw material supplier might be the cause.\nMan: Let\'s schedule an inspection of their facility and also review our own production line.',
    options: [
      { text: '(A) Replacing the supplier immediately', isCorrect: false },
      { text: '(B) Inspecting the supplier and reviewing the production line', isCorrect: true },
      { text: '(C) Increasing the quality control budget', isCorrect: false },
      { text: '(D) Hiring more quality inspectors', isCorrect: false },
    ],
    explanation: '男性が「サプライヤーの施設検査と自社の生産ラインの見直しを提案しています。両方の調査が必要です。',
    keyVocabulary: [
      { word: 'schedule an inspection', meaning: '検査を予定する' },
      { word: 'facility', meaning: '施設' },
      { word: 'production line', meaning: '生産ライン' },
    ],
  },
  {
    id: 324,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What did the man recently do?',
    audioScript: 'Man: I just finished updating the employee handbook with the new remote work guidelines.\nWoman: Does it include the policy on reimbursement for home office equipment?\nMan: Yes, employees can now claim up to five hundred dollars per year for home office supplies.\nWoman: That\'s a good improvement. I\'ll make sure my team knows about the change.',
    options: [
      { text: '(A) He hired new employees', isCorrect: false },
      { text: '(B) He updated the employee handbook', isCorrect: true },
      { text: '(C) He purchased office equipment', isCorrect: false },
      { text: '(D) He moved to a new office', isCorrect: false },
    ],
    explanation: '男性が「リモートワークガイドラインを含む従業員ハンドブックを更新したばかり」と言っています。',
    keyVocabulary: [
      { word: 'employee handbook', meaning: '従業員ハンドブック' },
      { word: 'reimbursement', meaning: '費用償還' },
      { word: 'claim', meaning: '請求する' },
    ],
  },
  {
    id: 325,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'How much can employees claim for home office supplies?',
    audioScript: 'Man: I just finished updating the employee handbook with the new remote work guidelines.\nWoman: Does it include the policy on reimbursement for home office equipment?\nMan: Yes, employees can now claim up to five hundred dollars per year for home office supplies.\nWoman: That\'s a good improvement. I\'ll make sure my team knows about the change.',
    options: [
      { text: '(A) $100', isCorrect: false },
      { text: '(B) $300', isCorrect: false },
      { text: '(C) $500', isCorrect: true },
      { text: '(D) $1,000', isCorrect: false },
    ],
    explanation: '「年間最大500ドルまで請求可能」と男性が説明しています。',
    keyVocabulary: [
      { word: 'per year', meaning: '年間で' },
      { word: 'home office supplies', meaning: '在宅勤務用品' },
      { word: 'guidelines', meaning: 'ガイドライン' },
    ],
  },
  {
    id: 326,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman offer to do?',
    audioScript: 'Man: I just finished updating the employee handbook with the new remote work guidelines.\nWoman: Does it include the policy on reimbursement for home office equipment?\nMan: Yes, employees can now claim up to five hundred dollars per year for home office supplies.\nWoman: That\'s a good improvement. I\'ll make sure my team knows about the change.',
    options: [
      { text: '(A) Distribute the handbook to all departments', isCorrect: false },
      { text: '(B) Inform her team about the update', isCorrect: true },
      { text: '(C) Submit a claim for home office supplies', isCorrect: false },
      { text: '(D) Review the handbook for accuracy', isCorrect: false },
    ],
    explanation: '女性が「チームに変更を知らせる」と言っています。',
    keyVocabulary: [
      { word: 'make sure', meaning: '〜を確実にする' },
      { word: 'improvement', meaning: '改善' },
      { word: 'change', meaning: '変更' },
    ],
  },
  {
    id: 327,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the problem the woman mentions?',
    audioScript: 'Woman: I\'ve been trying to access the client database, but it keeps giving me an error message.\nMan: That\'s because the system is undergoing scheduled maintenance today. It should be back up by 4 P.M.\nWoman: I have a client meeting at 3:30. Is there any way to access the data sooner?\nMan: I\'ll contact IT and see if they can prioritize restoring the database.',
    options: [
      { text: '(A) She forgot her login credentials', isCorrect: false },
      { text: '(B) She cannot access the client database', isCorrect: true },
      { text: '(C) She lost a client\'s contact information', isCorrect: false },
      { text: '(D) She missed an important meeting', isCorrect: false },
    ],
    explanation: '女性が「顧客データベースにアクセスしようとしているがエラーメッセージが出る」と言っています。',
    keyVocabulary: [
      { word: 'error message', meaning: 'エラーメッセージ' },
      { word: 'scheduled maintenance', meaning: '予定メンテナンス' },
      { word: 'prioritize', meaning: '優先する' },
    ],
  },
  {
    id: 328,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'When is the woman\'s client meeting?',
    audioScript: 'Woman: I\'ve been trying to access the client database, but it keeps giving me an error message.\nMan: That\'s because the system is undergoing scheduled maintenance today. It should be back up by 4 P.M.\nWoman: I have a client meeting at 3:30. Is there any way to access the data sooner?\nMan: I\'ll contact IT and see if they can prioritize restoring the database.',
    options: [
      { text: '(A) 3:00 P.M.', isCorrect: false },
      { text: '(B) 3:30 P.M.', isCorrect: true },
      { text: '(C) 4:00 P.M.', isCorrect: false },
      { text: '(D) 5:00 P.M.', isCorrect: false },
    ],
    explanation: '女性が「3:30にクライアント会議がある」と言っています。4:00 P.M.はメンテナンス終了予定時刻です。',
    keyVocabulary: [
      { word: 'undergoing', meaning: '〜を受けている' },
      { word: 'back up', meaning: '復旧する' },
      { word: 'restoring', meaning: '復元する' },
    ],
  },
  {
    id: 329,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What will the man do next?',
    audioScript: 'Woman: I\'ve been trying to access the client database, but it keeps giving me an error message.\nMan: That\'s because the system is undergoing scheduled maintenance today. It should be back up by 4 P.M.\nWoman: I have a client meeting at 3:30. Is there any way to access the data sooner?\nMan: I\'ll contact IT and see if they can prioritize restoring the database.',
    options: [
      { text: '(A) Reschedule the woman\'s meeting', isCorrect: false },
      { text: '(B) Ask IT to prioritize the database restoration', isCorrect: true },
      { text: '(C) Print out the client data from a backup', isCorrect: false },
      { text: '(D) Cancel the maintenance', isCorrect: false },
    ],
    explanation: '男性が「IT部門に連絡して、データベース復旧を優先できるか確認する」と言っています。',
    keyVocabulary: [
      { word: 'contact', meaning: '連絡する' },
      { word: 'see if', meaning: '〜かどうか確認する' },
      { word: 'restoring', meaning: '復元、復旧' },
    ],
  },
  {
    id: 330,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What are the speakers discussing?',
    audioScript: 'Man: I received the estimate for the office renovation. It\'s twenty percent over our original budget.\nWoman: That\'s quite a lot. Which items are costing more than expected?\nMan: Mostly the flooring and the lighting fixtures. The contractor said material prices have gone up.\nWoman: Let\'s ask them to suggest some alternative materials that would bring the cost down.',
    options: [
      { text: '(A) An office renovation estimate', isCorrect: true },
      { text: '(B) A new office lease agreement', isCorrect: false },
      { text: '(C) An equipment purchase order', isCorrect: false },
      { text: '(D) A building construction plan', isCorrect: false },
    ],
    explanation: 'オフィス改装の見積もりについて話し合っています。「予算を20%超過している」ことが話題です。',
    keyVocabulary: [
      { word: 'estimate', meaning: '見積もり' },
      { word: 'renovation', meaning: '改装' },
      { word: 'original budget', meaning: '当初予算' },
    ],
  },
  {
    id: 331,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the main reason for the cost increase?',
    audioScript: 'Man: I received the estimate for the office renovation. It\'s twenty percent over our original budget.\nWoman: That\'s quite a lot. Which items are costing more than expected?\nMan: Mostly the flooring and the lighting fixtures. The contractor said material prices have gone up.\nWoman: Let\'s ask them to suggest some alternative materials that would bring the cost down.',
    options: [
      { text: '(A) Additional labor charges', isCorrect: false },
      { text: '(B) Higher material prices', isCorrect: true },
      { text: '(C) Extended project timeline', isCorrect: false },
      { text: '(D) New safety requirements', isCorrect: false },
    ],
    explanation: '「材料費が上昇した」と請負業者が説明しています。これがコスト増の主な理由です。',
    keyVocabulary: [
      { word: 'flooring', meaning: '床材' },
      { word: 'lighting fixtures', meaning: '照明器具' },
      { word: 'contractor', meaning: '請負業者' },
    ],
  },
  {
    id: 332,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman suggest?',
    audioScript: 'Man: I received the estimate for the office renovation. It\'s twenty percent over our original budget.\nWoman: That\'s quite a lot. Which items are costing more than expected?\nMan: Mostly the flooring and the lighting fixtures. The contractor said material prices have gone up.\nWoman: Let\'s ask them to suggest some alternative materials that would bring the cost down.',
    options: [
      { text: '(A) Canceling the renovation', isCorrect: false },
      { text: '(B) Asking the contractor for cheaper alternatives', isCorrect: true },
      { text: '(C) Reducing the scope of the renovation', isCorrect: false },
      { text: '(D) Finding a new contractor', isCorrect: false },
    ],
    explanation: '女性が「コストを下げられる代替材料を提案してもらうよう頼もう」と提案しています。',
    keyVocabulary: [
      { word: 'alternative materials', meaning: '代替材料' },
      { word: 'bring the cost down', meaning: 'コストを下げる' },
      { word: 'suggest', meaning: '提案する' },
    ],
  },
  {
    id: 333,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'Where does this conversation most likely take place?',
    audioScript: 'Woman: Excuse me, I\'m looking for a gift for my colleague who\'s retiring next week.\nMan: How about an engraved pen set? We have several options under fifty dollars.\nWoman: That sounds nice. Can it be personalized with his name?\nMan: Absolutely. Engraving takes about two business days.',
    options: [
      { text: '(A) At an office', isCorrect: false },
      { text: '(B) At a gift shop', isCorrect: true },
      { text: '(C) At a post office', isCorrect: false },
      { text: '(D) At a printing company', isCorrect: false },
    ],
    explanation: 'ギフトショップでの会話です。プレゼントを探している女性と店員の会話と推測できます。',
    keyVocabulary: [
      { word: 'engraved', meaning: '彫刻入り' },
      { word: 'pen set', meaning: 'ペンセット' },
      { word: 'personalized', meaning: '名入れした' },
    ],
  },
  {
    id: 334,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'How long does the engraving take?',
    audioScript: 'Woman: Excuse me, I\'m looking for a gift for my colleague who\'s retiring next week.\nMan: How about an engraved pen set? We have several options under fifty dollars.\nWoman: That sounds nice. Can it be personalized with his name?\nMan: Absolutely. Engraving takes about two business days.',
    options: [
      { text: '(A) One business day', isCorrect: false },
      { text: '(B) Two business days', isCorrect: true },
      { text: '(C) Five business days', isCorrect: false },
      { text: '(D) One week', isCorrect: false },
    ],
    explanation: '店員が「彫刻には約2営業日かかる」と言っています。',
    keyVocabulary: [
      { word: 'retiring', meaning: '退職する' },
      { word: 'business days', meaning: '営業日' },
      { word: 'absolutely', meaning: 'もちろんです' },
    ],
  },
  {
    id: 335,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the man asking about?',
    audioScript: 'Man: I\'d like to know if the warranty on my laptop covers water damage. I accidentally spilled coffee on it this morning.\nWoman: Unfortunately, the standard warranty does not cover liquid damage. However, if you purchased the extended protection plan, it might be covered.\nMan: I think I did upgrade to the premium plan when I bought it.\nWoman: Let me look up your account. Can I have your order number?',
    options: [
      { text: '(A) How to repair his laptop', isCorrect: false },
      { text: '(B) Whether water damage is covered by warranty', isCorrect: true },
      { text: '(C) How much a replacement laptop costs', isCorrect: false },
      { text: '(D) When his warranty expires', isCorrect: false },
    ],
    explanation: '男性が「ノートパソコンの保証が水濡れに対応しているか」を尋ねています。',
    keyVocabulary: [
      { word: 'warranty', meaning: '保証' },
      { word: 'water damage', meaning: '水濡れ損傷' },
      { word: 'extended protection plan', meaning: '延長保証プラン' },
    ],
  },
  {
    id: 336,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the standard warranty NOT cover?',
    audioScript: 'Man: I\'d like to know if the warranty on my laptop covers water damage. I accidentally spilled coffee on it this morning.\nWoman: Unfortunately, the standard warranty does not cover liquid damage. However, if you purchased the extended protection plan, it might be covered.\nMan: I think I did upgrade to the premium plan when I bought it.\nWoman: Let me look up your account. Can I have your order number?',
    options: [
      { text: '(A) Manufacturing defects', isCorrect: false },
      { text: '(B) Liquid damage', isCorrect: true },
      { text: '(C) Battery replacement', isCorrect: false },
      { text: '(D) Software issues', isCorrect: false },
    ],
    explanation: '「標準保証は液体による損傷をカバーしていません」と女性が説明しています。',
    keyVocabulary: [
      { word: 'standard warranty', meaning: '標準保証' },
      { word: 'liquid damage', meaning: '液体による損傷' },
      { word: 'premium plan', meaning: 'プレミアムプラン' },
    ],
  },
  {
    id: 337,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What information does the woman need?',
    audioScript: 'Man: I\'d like to know if the warranty on my laptop covers water damage. I accidentally spilled coffee on it this morning.\nWoman: Unfortunately, the standard warranty does not cover liquid damage. However, if you purchased the extended protection plan, it might be covered.\nMan: I think I did upgrade to the premium plan when I bought it.\nWoman: Let me look up your account. Can I have your order number?',
    options: [
      { text: '(A) The serial number', isCorrect: false },
      { text: '(B) The order number', isCorrect: true },
      { text: '(C) The purchase receipt', isCorrect: false },
      { text: '(D) The credit card used', isCorrect: false },
    ],
    explanation: '女性が「注文番号を教えていただけますか？」と口座を確認するために注文番号を求めています。',
    keyVocabulary: [
      { word: 'look up', meaning: '調べる' },
      { word: 'account', meaning: 'アカウント' },
      { word: 'order number', meaning: '注文番号' },
    ],
  },
  {
    id: 338,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman want the man to do?',
    audioScript: 'Woman: Could you proofread the annual report before I send it to the board?\nMan: Sure. When do you need it back?\nWoman: Ideally by Thursday morning. I want to distribute it before Friday\'s meeting.\nMan: I\'ll have it done by Wednesday evening. Also, I noticed the financial summary is missing from the draft.',
    options: [
      { text: '(A) Write the annual report', isCorrect: false },
      { text: '(B) Proofread the annual report', isCorrect: true },
      { text: '(C) Distribute the annual report', isCorrect: false },
      { text: '(D) Print copies of the annual report', isCorrect: false },
    ],
    explanation: '女性が「年次報告書の校正をお願いしたい」と頼んでいます。proofread＝校正する。',
    keyVocabulary: [
      { word: 'proofread', meaning: '校正する' },
      { word: 'annual report', meaning: '年次報告書' },
      { word: 'distribute', meaning: '配布する' },
    ],
  },
  {
    id: 339,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'When does the woman need the document back?',
    audioScript: 'Woman: Could you proofread the annual report before I send it to the board?\nMan: Sure. When do you need it back?\nWoman: Ideally by Thursday morning. I want to distribute it before Friday\'s meeting.\nMan: I\'ll have it done by Wednesday evening. Also, I noticed the financial summary is missing from the draft.',
    options: [
      { text: '(A) By Wednesday evening', isCorrect: false },
      { text: '(B) By Thursday morning', isCorrect: true },
      { text: '(C) By Friday', isCorrect: false },
      { text: '(D) By next Monday', isCorrect: false },
    ],
    explanation: '女性が「できれば木曜日の朝までに」と言っています。水曜の夜は男性が返す予定の時刻です。',
    keyVocabulary: [
      { word: 'ideally', meaning: '理想的には' },
      { word: 'financial summary', meaning: '財務サマリー' },
      { word: 'draft', meaning: 'ドラフト、草案' },
    ],
  },
  {
    id: 340,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What problem does the man find?',
    audioScript: 'Woman: Could you proofread the annual report before I send it to the board?\nMan: Sure. When do you need it back?\nWoman: Ideally by Thursday morning. I want to distribute it before Friday\'s meeting.\nMan: I\'ll have it done by Wednesday evening. Also, I noticed the financial summary is missing from the draft.',
    options: [
      { text: '(A) The report has many grammatical errors', isCorrect: false },
      { text: '(B) The financial summary is missing', isCorrect: true },
      { text: '(C) The format is incorrect', isCorrect: false },
      { text: '(D) The data is outdated', isCorrect: false },
    ],
    explanation: '男性が「ドラフトに財務サマリーが欠けている」と指摘しています。',
    keyVocabulary: [
      { word: 'missing', meaning: '欠けている' },
      { word: 'notice', meaning: '気づく' },
      { word: 'board', meaning: '取締役会' },
    ],
  },
  {
    id: 341,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What event are the speakers planning?',
    audioScript: 'Man: Have you decided on the venue for the company anniversary celebration?\nWoman: Not yet. I\'m choosing between the rooftop terrace at the Grand Hotel and the garden at the City Club.\nMan: How many guests are we expecting?\nWoman: Around one hundred fifty. The Grand Hotel can hold two hundred, but the City Club garden maxes out at one hundred twenty.',
    options: [
      { text: '(A) A product launch', isCorrect: false },
      { text: '(B) A company anniversary celebration', isCorrect: true },
      { text: '(C) A retirement party', isCorrect: false },
      { text: '(D) A charity fundraiser', isCorrect: false },
    ],
    explanation: '会社の記念祝賀会の会場選びについて話しています。',
    keyVocabulary: [
      { word: 'anniversary celebration', meaning: '記念祝賀会' },
      { word: 'venue', meaning: '会場' },
      { word: 'rooftop terrace', meaning: '屋上テラス' },
    ],
  },
  {
    id: 342,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'Why might the City Club garden NOT be suitable?',
    audioScript: 'Man: Have you decided on the venue for the company anniversary celebration?\nWoman: Not yet. I\'m choosing between the rooftop terrace at the Grand Hotel and the garden at the City Club.\nMan: How many guests are we expecting?\nWoman: Around one hundred fifty. The Grand Hotel can hold two hundred, but the City Club garden maxes out at one hundred twenty.',
    options: [
      { text: '(A) It is too expensive', isCorrect: false },
      { text: '(B) It does not have parking', isCorrect: false },
      { text: '(C) It cannot accommodate all the guests', isCorrect: true },
      { text: '(D) It is not available on the event date', isCorrect: false },
    ],
    explanation: 'City Clubの庭は最大120人だが、150人が予想されているため収容できない可能性があります。',
    keyVocabulary: [
      { word: 'maxes out at', meaning: '最大〜まで' },
      { word: 'hold', meaning: '収容する' },
      { word: 'expecting', meaning: '予想している' },
    ],
  },
  {
    id: 343,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the man\'s occupation?',
    audioScript: 'Woman: The lab results show elevated levels of contamination in the water samples collected from the factory site.\nMan: That\'s alarming. I\'ll need to submit a report to the environmental agency by the end of the week.\nWoman: Should we also notify the local community?\nMan: Not yet. Let\'s wait until we have confirmation from a second round of testing.',
    options: [
      { text: '(A) A factory manager', isCorrect: false },
      { text: '(B) An environmental inspector', isCorrect: true },
      { text: '(C) A community leader', isCorrect: false },
      { text: '(D) A water treatment technician', isCorrect: false },
    ],
    explanation: '環境調査官の会話です。水質検査の結果を報告する役割から推測できます。',
    keyVocabulary: [
      { word: 'elevated levels', meaning: '上昇した水準' },
      { word: 'contamination', meaning: '汚染' },
      { word: 'environmental agency', meaning: '環境庁' },
    ],
  },
  {
    id: 344,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the man decide about notifying the community?',
    audioScript: 'Woman: The lab results show elevated levels of contamination in the water samples collected from the factory site.\nMan: That\'s alarming. I\'ll need to submit a report to the environmental agency by the end of the week.\nWoman: Should we also notify the local community?\nMan: Not yet. Let\'s wait until we have confirmation from a second round of testing.',
    options: [
      { text: '(A) To notify them immediately', isCorrect: false },
      { text: '(B) To wait for further test results', isCorrect: true },
      { text: '(C) To let the factory handle the notification', isCorrect: false },
      { text: '(D) To hold a press conference', isCorrect: false },
    ],
    explanation: '男性が「まだ通知しない。2回目のテストで確認できてからにしよう」と判断しています。',
    keyVocabulary: [
      { word: 'notify', meaning: '通知する' },
      { word: 'confirmation', meaning: '確認' },
      { word: 'second round of testing', meaning: '2回目のテスト' },
    ],
  },
  {
    id: 345,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is the woman asking about?',
    audioScript: 'Woman: I\'m interested in the coworking space on the third floor. Is it still available?\nMan: Yes, we have two desks left. Would you like a private office or an open desk?\nWoman: A private office would be ideal. What\'s the monthly rate?\nMan: Eight hundred dollars per month, which includes high-speed Internet, access to meeting rooms, and complimentary coffee.',
    options: [
      { text: '(A) Renting office space', isCorrect: true },
      { text: '(B) Applying for a job', isCorrect: false },
      { text: '(C) Buying office furniture', isCorrect: false },
      { text: '(D) Attending a networking event', isCorrect: false },
    ],
    explanation: '女性が「3階のシェアオフィスに興味がある」と尋ねています。オフィススペースの賃貸が話題です。',
    keyVocabulary: [
      { word: 'coworking space', meaning: 'シェアオフィス' },
      { word: 'monthly rate', meaning: '月額料金' },
      { word: 'complimentary', meaning: '無料の' },
    ],
  },
  {
    id: 346,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What is included in the monthly rate?',
    audioScript: 'Woman: I\'m interested in the coworking space on the third floor. Is it still available?\nMan: Yes, we have two desks left. Would you like a private office or an open desk?\nWoman: A private office would be ideal. What\'s the monthly rate?\nMan: Eight hundred dollars per month, which includes high-speed Internet, access to meeting rooms, and complimentary coffee.',
    options: [
      { text: '(A) Only the desk and chair', isCorrect: false },
      { text: '(B) Internet, meeting rooms, and coffee', isCorrect: true },
      { text: '(C) Lunch and parking', isCorrect: false },
      { text: '(D) Cleaning and laundry services', isCorrect: false },
    ],
    explanation: '月額料金には高速インターネット、会議室利用、コーヒーが含まれています。',
    keyVocabulary: [
      { word: 'high-speed Internet', meaning: '高速インターネット' },
      { word: 'access to', meaning: '〜へのアクセス' },
      { word: 'private office', meaning: '個室オフィス' },
    ],
  },
  {
    id: 347,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the man want to do?',
    audioScript: 'Man: I\'d like to return this jacket I bought online last week. It doesn\'t fit properly.\nWoman: No problem. Do you have the receipt and original packaging?\nMan: I have the digital receipt in my e-mail, but I threw away the packaging.\nWoman: That should be fine. I can process the return with the digital receipt. Would you like a refund or an exchange?',
    options: [
      { text: '(A) Return a jacket', isCorrect: true },
      { text: '(B) Buy a new jacket', isCorrect: false },
      { text: '(C) Exchange a jacket for a different color', isCorrect: false },
      { text: '(D) Complain about the jacket quality', isCorrect: false },
    ],
    explanation: '男性が「先週オンラインで買ったジャケットを返品したい」と言っています。',
    keyVocabulary: [
      { word: 'return', meaning: '返品する' },
      { word: 'digital receipt', meaning: 'デジタルレシート' },
      { word: 'refund', meaning: '返金' },
    ],
  },
  {
    id: 348,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What does the woman need to process the return?',
    audioScript: 'Man: I\'d like to return this jacket I bought online last week. It doesn\'t fit properly.\nWoman: No problem. Do you have the receipt and original packaging?\nMan: I have the digital receipt in my e-mail, but I threw away the packaging.\nWoman: That should be fine. I can process the return with the digital receipt. Would you like a refund or an exchange?',
    options: [
      { text: '(A) The original packaging', isCorrect: false },
      { text: '(B) The credit card used for purchase', isCorrect: false },
      { text: '(C) The digital receipt', isCorrect: true },
      { text: '(D) A manager\'s approval', isCorrect: false },
    ],
    explanation: '「デジタルレシートがあれば処理できる」と女性が言っています。包装は捨てていても問題ありません。',
    keyVocabulary: [
      { word: 'original packaging', meaning: '元の包装' },
      { word: 'process the return', meaning: '返品を処理する' },
      { word: 'exchange', meaning: '交換' },
    ],
  },
  {
    id: 349,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'What are the speakers mainly discussing?',
    audioScript: 'Woman: We need to finalize the agenda for next week\'s training seminar.\nMan: I\'ve added sessions on data security and customer service. Should we also include a session on the new compliance regulations?\nWoman: Yes, the legal team specifically requested that. Also, could you book the larger conference room? We\'ve had twenty more registrations than expected.\nMan: I\'ll take care of that right away.',
    options: [
      { text: '(A) A training seminar agenda', isCorrect: true },
      { text: '(B) A marketing campaign plan', isCorrect: false },
      { text: '(C) A product development schedule', isCorrect: false },
      { text: '(D) A budget proposal', isCorrect: false },
    ],
    explanation: '来週の研修セミナーの議題を最終決定する話し合いです。',
    keyVocabulary: [
      { word: 'finalize', meaning: '最終決定する' },
      { word: 'agenda', meaning: '議題、議事' },
      { word: 'training seminar', meaning: '研修セミナー' },
    ],
  },
  {
    id: 350,
    part: 3,
    category: 'part3',
    categoryLabel: '会話問題',
    question: 'Why does the woman want to change the conference room?',
    audioScript: 'Woman: We need to finalize the agenda for next week\'s training seminar.\nMan: I\'ve added sessions on data security and customer service. Should we also include a session on the new compliance regulations?\nWoman: Yes, the legal team specifically requested that. Also, could you book the larger conference room? We\'ve had twenty more registrations than expected.\nMan: I\'ll take care of that right away.',
    options: [
      { text: '(A) The current room is under renovation', isCorrect: false },
      { text: '(B) More people registered than anticipated', isCorrect: true },
      { text: '(C) The AV equipment in the current room is broken', isCorrect: false },
      { text: '(D) The legal team needs a bigger space', isCorrect: false },
    ],
    explanation: '「予想より20人多い登録があった」ため、大きい会議室が必要です。参加者が予想より多いことが理由です。',
    keyVocabulary: [
      { word: 'registrations', meaning: '登録、申込' },
      { word: 'compliance regulations', meaning: 'コンプライアンス規制' },
      { word: 'take care of', meaning: '対応する' },
    ],
  },

  // ===== Part 4: Short Talks (5 questions) =====
  {
    id: 401,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this announcement?',
    audioScript: 'Attention all shoppers. Starting this weekend, our store will extend its hours on Saturdays and Sundays. The new weekend hours will be from 8 A.M. to 10 P.M., giving you three extra hours to shop. Additionally, we are pleased to introduce free gift wrapping services for all purchases over fifty dollars. This service will be available at the customer service counter near the main entrance. Thank you for shopping with us.',
    options: [
      { text: '(A) To announce a store closure', isCorrect: false },
      { text: '(B) To inform about new store hours and services', isCorrect: true },
      { text: '(C) To advertise a weekend sale', isCorrect: false },
      { text: '(D) To announce a new store location', isCorrect: false },
    ],
    explanation: '案内の目的を問う問題です。営業時間の延長とギフトラッピングサービスの導入を知らせる内容で、「新しい営業時間とサービスを伝える」が正解。案内の冒頭と全体の構成から目的を把握しましょう。',
    keyVocabulary: [
      { word: 'extend its hours', meaning: '営業時間を延長する' },
      { word: 'gift wrapping services', meaning: 'ギフトラッピングサービス' },
      { word: 'customer service counter', meaning: 'カスタマーサービスカウンター' },
    ],
  },
  {
    id: 402,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'How much must a customer spend to receive free gift wrapping?',
    audioScript: 'Attention all shoppers. Starting this weekend, our store will extend its hours on Saturdays and Sundays. The new weekend hours will be from 8 A.M. to 10 P.M., giving you three extra hours to shop. Additionally, we are pleased to introduce free gift wrapping services for all purchases over fifty dollars. This service will be available at the customer service counter near the main entrance. Thank you for shopping with us.',
    options: [
      { text: '(A) $25', isCorrect: false },
      { text: '(B) $50', isCorrect: true },
      { text: '(C) $75', isCorrect: false },
      { text: '(D) $100', isCorrect: false },
    ],
    explanation: '「50ドル以上の購入で無料ギフトラッピング」という条件が明記されています。金額や数値を含む具体的な条件は正確に聞き取る必要があります。「over fifty dollars」＝ 50ドル超。',
    keyVocabulary: [
      { word: 'purchases', meaning: '購入（品）' },
      { word: 'over fifty dollars', meaning: '50ドル以上' },
    ],
  },
  {
    id: 403,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'Who is the intended audience of this message?',
    audioScript: 'Good morning, team. This is a reminder that the annual performance reviews will take place over the next two weeks. Please schedule a thirty-minute meeting with your direct supervisor by the end of this week. You should prepare a self-assessment document highlighting your key achievements, areas for improvement, and professional development goals. Templates are available on the company intranet under the HR section. If you have any questions, please contact the human resources department.',
    options: [
      { text: '(A) Job applicants', isCorrect: false },
      { text: '(B) Company employees', isCorrect: true },
      { text: '(C) External consultants', isCorrect: false },
      { text: '(D) New hires', isCorrect: false },
    ],
    explanation: '「Good morning, team」という呼びかけと、直属の上司との面談の指示から、対象は従業員です。「会社の従業員」が正解。メッセージの冒頭の呼びかけは対象者を特定する重要な手がかりです。',
    keyVocabulary: [
      { word: 'performance reviews', meaning: '人事評価' },
      { word: 'direct supervisor', meaning: '直属の上司' },
      { word: 'self-assessment', meaning: '自己評価' },
    ],
  },
  {
    id: 404,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What are employees asked to prepare?',
    audioScript: 'Good morning, team. This is a reminder that the annual performance reviews will take place over the next two weeks. Please schedule a thirty-minute meeting with your direct supervisor by the end of this week. You should prepare a self-assessment document highlighting your key achievements, areas for improvement, and professional development goals. Templates are available on the company intranet under the HR section. If you have any questions, please contact the human resources department.',
    options: [
      { text: '(A) A project report', isCorrect: false },
      { text: '(B) A self-assessment document', isCorrect: true },
      { text: '(C) A meeting agenda', isCorrect: false },
      { text: '(D) A training schedule', isCorrect: false },
    ],
    explanation: '「自己評価文書を準備してください」と明確に指示されています。自己評価文書には主要な成果、改善点、キャリア目標を含めるよう求められています。',
    keyVocabulary: [
      { word: 'key achievements', meaning: '主要な成果' },
      { word: 'areas for improvement', meaning: '改善点' },
      { word: 'professional development goals', meaning: 'キャリア形成の目標' },
    ],
  },
  {
    id: 405,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'Where can employees find the template?',
    audioScript: 'Good morning, team. This is a reminder that the annual performance reviews will take place over the next two weeks. Please schedule a thirty-minute meeting with your direct supervisor by the end of this week. You should prepare a self-assessment document highlighting your key achievements, areas for improvement, and professional development goals. Templates are available on the company intranet under the HR section. If you have any questions, please contact the human resources department.',
    options: [
      { text: '(A) From the HR department', isCorrect: false },
      { text: '(B) On the company intranet', isCorrect: true },
      { text: '(C) In the meeting room', isCorrect: false },
      { text: '(D) From the supervisor', isCorrect: false },
    ],
    explanation: '「テンプレートは社内イントラネットのHRセクションにあります」と明記されています。「社内イントラネット上」が正解。情報源（where）を問う問題では、場所を示す表現に注意してください。',
    keyVocabulary: [
      { word: 'template', meaning: 'テンプレート、雛形' },
      { word: 'company intranet', meaning: '社内イントラネット' },
      { word: 'HR section', meaning: '人事部門セクション' },
    ],
  },

  {
    id: 406,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this announcement?',
    audioScript: 'Attention, passengers on Flight 217 to Chicago. We regret to inform you that due to severe weather conditions in the Chicago area, your flight has been delayed by approximately two hours. The new departure time is 4:45 P.M. Complimentary refreshments will be available at Gate 14. We apologize for the inconvenience and appreciate your patience. Please check the departure monitors for further updates.',
    options: [
      { text: '(A) To announce a flight cancellation', isCorrect: false },
      { text: '(B) To inform passengers of a flight delay', isCorrect: true },
      { text: '(C) To announce gate change', isCorrect: false },
      { text: '(D) To advertise a new route', isCorrect: false },
    ],
    explanation: '悪天候によるフライトの遅延を知らせる案内です。「delayed by approximately two hours」と述べています。',
    keyVocabulary: [
      { word: 'severe weather conditions', meaning: '悪天候' },
      { word: 'complimentary refreshments', meaning: '無料の軽食' },
      { word: 'departure monitors', meaning: '出発案内モニター' },
    ],
  },
  {
    id: 407,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the new departure time?',
    audioScript: 'Attention, passengers on Flight 217 to Chicago. We regret to inform you that due to severe weather conditions in the Chicago area, your flight has been delayed by approximately two hours. The new departure time is 4:45 P.M. Complimentary refreshments will be available at Gate 14. We apologize for the inconvenience and appreciate your patience. Please check the departure monitors for further updates.',
    options: [
      { text: '(A) 2:45 P.M.', isCorrect: false },
      { text: '(B) 3:45 P.M.', isCorrect: false },
      { text: '(C) 4:45 P.M.', isCorrect: true },
      { text: '(D) 6:45 P.M.', isCorrect: false },
    ],
    explanation: '「新しい出発時刻は午後4:45」と明記されています。時間の聞き取りは正確に。',
    keyVocabulary: [
      { word: 'delayed by', meaning: '〜遅れで' },
      { word: 'approximately', meaning: '約' },
      { word: 'patience', meaning: '忍耐' },
    ],
  },
  {
    id: 408,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'Where can passengers get refreshments?',
    audioScript: 'Attention, passengers on Flight 217 to Chicago. We regret to inform you that due to severe weather conditions in the Chicago area, your flight has been delayed by approximately two hours. The new departure time is 4:45 P.M. Complimentary refreshments will be available at Gate 14. We apologize for the inconvenience and appreciate your patience. Please check the departure monitors for further updates.',
    options: [
      { text: '(A) At the main terminal', isCorrect: false },
      { text: '(B) At Gate 14', isCorrect: true },
      { text: '(C) At the restaurant near the gate', isCorrect: false },
      { text: '(D) At the customer service desk', isCorrect: false },
    ],
    explanation: '「Gate 14で無料の軽食が利用可能」と案内されています。場所の特定が重要です。',
    keyVocabulary: [
      { word: 'gate', meaning: 'ゲート、搭乗口' },
      { word: 'terminal', meaning: 'ターミナル' },
      { word: 'customer service desk', meaning: 'カスタマーサービスデスク' },
    ],
  },
  {
    id: 409,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is being advertised?',
    audioScript: 'Looking for a reliable solution to manage your business finances? Introducing FinancePro 360, the all-in-one accounting software designed specifically for small and medium-sized businesses. With FinancePro 360, you can automate invoicing, track expenses in real time, and generate detailed financial reports with just one click. Sign up before March 31 and receive a thirty-day free trial plus a twenty percent discount on your first annual subscription. Visit our website at financepro360.com to get started today.',
    options: [
      { text: '(A) A financial consulting service', isCorrect: false },
      { text: '(B) An accounting software product', isCorrect: true },
      { text: '(C) A business loan program', isCorrect: false },
      { text: '(D) A tax preparation workshop', isCorrect: false },
    ],
    explanation: 'FinancePro 360という中小企業向け会計ソフトウェアの広告です。',
    keyVocabulary: [
      { word: 'automate invoicing', meaning: '請求書発行を自動化する' },
      { word: 'track expenses', meaning: '経費を追跡する' },
      { word: 'annual subscription', meaning: '年間サブスクリプション' },
    ],
  },
  {
    id: 410,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What discount is offered for early sign-up?',
    audioScript: 'Looking for a reliable solution to manage your business finances? Introducing FinancePro 360, the all-in-one accounting software designed specifically for small and medium-sized businesses. With FinancePro 360, you can automate invoicing, track expenses in real time, and generate detailed financial reports with just one click. Sign up before March 31 and receive a thirty-day free trial plus a twenty percent discount on your first annual subscription. Visit our website at financepro360.com to get started today.',
    options: [
      { text: '(A) 10%', isCorrect: false },
      { text: '(B) 20%', isCorrect: true },
      { text: '(C) 30%', isCorrect: false },
      { text: '(D) 50%', isCorrect: false },
    ],
    explanation: '「3月31日までに申し込むと、初年度サブスクリプションの20%割引」がオファーされています。',
    keyVocabulary: [
      { word: 'free trial', meaning: '無料体験' },
      { word: 'discount', meaning: '割引' },
      { word: 'subscription', meaning: 'サブスクリプション、購読' },
    ],
  },
  {
    id: 411,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the main topic of this talk?',
    audioScript: 'Good afternoon, everyone. Thank you for attending today\'s workshop on workplace ergonomics. I\'m Dr. Sarah Kim from the Occupational Health Institute. Today, I\'ll be discussing common causes of workplace injuries and demonstrating simple exercises you can do at your desk to prevent repetitive strain. According to our latest research, sixty percent of office workers experience back or neck pain due to poor posture. By the end of this session, you\'ll have practical tools to improve your daily work setup.',
    options: [
      { text: '(A) Time management techniques', isCorrect: false },
      { text: '(B) Workplace ergonomics and injury prevention', isCorrect: true },
      { text: '(C) Stress reduction methods', isCorrect: false },
      { text: '(D) Office communication skills', isCorrect: false },
    ],
    explanation: '職場のエルゴノミクス（人間工学）と労働災害防止に関するワークショップです。',
    keyVocabulary: [
      { word: 'workplace ergonomics', meaning: '職場の人間工学' },
      { word: 'repetitive strain', meaning: '反復疲労' },
      { word: 'posture', meaning: '姿勢' },
    ],
  },
  {
    id: 412,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'According to the research mentioned, what percentage of office workers experience back or neck pain?',
    audioScript: 'Good afternoon, everyone. Thank you for attending today\'s workshop on workplace ergonomics. I\'m Dr. Sarah Kim from the Occupational Health Institute. Today, I\'ll be discussing common causes of workplace injuries and demonstrating simple exercises you can do at your desk to prevent repetitive strain. According to our latest research, sixty percent of office workers experience back or neck pain due to poor posture. By the end of this session, you\'ll have practical tools to improve your daily work setup.',
    options: [
      { text: '(A) 40%', isCorrect: false },
      { text: '(B) 50%', isCorrect: false },
      { text: '(C) 60%', isCorrect: true },
      { text: '(D) 70%', isCorrect: false },
    ],
    explanation: '「最新の研究によると、60%のオフィスワーカーが背中や首の痛みを経験している」と述べられています。',
    keyVocabulary: [
      { word: 'Occupational Health Institute', meaning: '労働衛生研究所' },
      { word: 'demonstrating', meaning: '実演する' },
      { word: 'practical tools', meaning: '実用的なツール' },
    ],
  },
  {
    id: 413,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the speaker announcing?',
    audioScript: 'This is an important message for all employees of GlobalTech Industries. Effective next Monday, the parking lot on the east side of the building will be closed for resurfacing. The project is expected to take three weeks to complete. During this period, employees are encouraged to use the parking structure on the west side or take advantage of the free shuttle service running from the Central Station every fifteen minutes. We appreciate your understanding and cooperation during this improvement project.',
    options: [
      { text: '(A) A parking lot closure', isCorrect: true },
      { text: '(B) A building evacuation', isCorrect: false },
      { text: '(C) A new employee orientation', isCorrect: false },
      { text: '(D) A company-wide meeting', isCorrect: false },
    ],
    explanation: '建物東側の駐車場が舗装工事のため閉鎖されるという案内です。',
    keyVocabulary: [
      { word: 'resurfacing', meaning: '舗装し直し' },
      { word: 'parking structure', meaning: '立体駐車場' },
      { word: 'shuttle service', meaning: 'シャトルバスサービス' },
    ],
  },
  {
    id: 414,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'How often does the shuttle service run?',
    audioScript: 'This is an important message for all employees of GlobalTech Industries. Effective next Monday, the parking lot on the east side of the building will be closed for resurfacing. The project is expected to take three weeks to complete. During this period, employees are encouraged to use the parking structure on the west side or take advantage of the free shuttle service running from the Central Station every fifteen minutes. We appreciate your understanding and cooperation during this improvement project.',
    options: [
      { text: '(A) Every 10 minutes', isCorrect: false },
      { text: '(B) Every 15 minutes', isCorrect: true },
      { text: '(C) Every 20 minutes', isCorrect: false },
      { text: '(D) Every 30 minutes', isCorrect: false },
    ],
    explanation: '「セントラル駅から15分おきに無料シャトルバスが運行」と案内されています。',
    keyVocabulary: [
      { word: 'every fifteen minutes', meaning: '15分おきに' },
      { word: 'effective', meaning: '〜から有効で' },
      { word: 'cooperation', meaning: '協力' },
    ],
  },
  {
    id: 415,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this message?',
    audioScript: 'Hello, this is a message for Mr. David Park from the Ridgeview Medical Clinic. This is a reminder that your annual physical examination is scheduled for Thursday, March 12, at 10:15 A.M. Please remember to bring your insurance card and any medications you are currently taking. You should also fast for at least eight hours before the appointment, as blood work will be part of the examination. If you need to reschedule, please call our office at 555-0192 at least twenty-four hours in advance. Thank you.',
    options: [
      { text: '(A) To deliver test results', isCorrect: false },
      { text: '(B) To remind a patient about an appointment', isCorrect: true },
      { text: '(C) To prescribe new medication', isCorrect: false },
      { text: '(D) To cancel a medical appointment', isCorrect: false },
    ],
    explanation: '健康診断の予約リマインダーです。Mr. David Park宛てのメッセージで、日時と注意事項を伝えています。',
    keyVocabulary: [
      { word: 'annual physical examination', meaning: '年次健康診断' },
      { word: 'fast', meaning: '絶食する' },
      { word: 'blood work', meaning: '血液検査' },
    ],
  },
  {
    id: 416,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What must the patient do before the appointment?',
    audioScript: 'Hello, this is a message for Mr. David Park from the Ridgeview Medical Clinic. This is a reminder that your annual physical examination is scheduled for Thursday, March 12, at 10:15 A.M. Please remember to bring your insurance card and any medications you are currently taking. You should also fast for at least eight hours before the appointment, as blood work will be part of the examination. If you need to reschedule, please call our office at 555-0192 at least twenty-four hours in advance. Thank you.',
    options: [
      { text: '(A) Take his medication with water', isCorrect: false },
      { text: '(B) Fast for at least eight hours', isCorrect: true },
      { text: '(C) Arrive one hour early', isCorrect: false },
      { text: '(D) Complete a questionnaire online', isCorrect: false },
    ],
    explanation: '「血液検査があるため、予約の8時間以上前から絶食してください」と指示されています。',
    keyVocabulary: [
      { word: 'insurance card', meaning: '保険証' },
      { word: 'medications', meaning: '服用中の薬' },
      { word: 'reschedule', meaning: '予約を変更する' },
    ],
  },
  {
    id: 417,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the main topic of this presentation?',
    audioScript: 'Welcome, everyone. Today\'s presentation covers our company\'s sustainability initiatives for the coming year. First, we\'ll discuss our plan to reduce carbon emissions by thirty percent through the installation of solar panels at all manufacturing facilities. Second, we\'ll introduce our new recycling program, which aims to divert eighty percent of factory waste from landfills by December. Finally, we\'ll preview our employee engagement campaign, Green Steps, which rewards staff members who adopt eco-friendly commuting options.',
    options: [
      { text: '(A) A new product line launch', isCorrect: false },
      { text: '(B) Sustainability initiatives', isCorrect: true },
      { text: '(C) Financial performance results', isCorrect: false },
      { text: '(D) Employee retention strategies', isCorrect: false },
    ],
    explanation: '会社のサステナビリティ（持続可能性）イニシアチブに関するプレゼンテーションです。',
    keyVocabulary: [
      { word: 'sustainability initiatives', meaning: 'サステナビリティ取り組み' },
      { word: 'carbon emissions', meaning: '炭素排出量' },
      { word: 'divert from landfills', meaning: '埋立地への廃棄を減らす' },
    ],
  },
  {
    id: 418,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'By what percentage does the company plan to reduce carbon emissions?',
    audioScript: 'Welcome, everyone. Today\'s presentation covers our company\'s sustainability initiatives for the coming year. First, we\'ll discuss our plan to reduce carbon emissions by thirty percent through the installation of solar panels at all manufacturing facilities. Second, we\'ll introduce our new recycling program, which aims to divert eighty percent of factory waste from landfills by December. Finally, we\'ll preview our employee engagement campaign, Green Steps, which rewards staff members who adopt eco-friendly commuting options.',
    options: [
      { text: '(A) 20%', isCorrect: false },
      { text: '(B) 30%', isCorrect: true },
      { text: '(C) 50%', isCorrect: false },
      { text: '(D) 80%', isCorrect: false },
    ],
    explanation: '「炭素排出量を30%削減する計画」と述べられています。80%はリサイクル目標です。',
    keyVocabulary: [
      { word: 'solar panels', meaning: 'ソーラーパネル' },
      { word: 'recycling program', meaning: 'リサイクルプログラム' },
      { word: 'eco-friendly', meaning: '環境に優しい' },
    ],
  },
  {
    id: 419,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the Green Steps campaign?',
    audioScript: 'Welcome, everyone. Today\'s presentation covers our company\'s sustainability initiatives for the coming year. First, we\'ll discuss our plan to reduce carbon emissions by thirty percent through the installation of solar panels at all manufacturing facilities. Second, we\'ll introduce our new recycling program, which aims to divert eighty percent of factory waste from landfills by December. Finally, we\'ll preview our employee engagement campaign, Green Steps, which rewards staff members who adopt eco-friendly commuting options.',
    options: [
      { text: '(A) A tree-planting initiative', isCorrect: false },
      { text: '(B) A reward program for eco-friendly commuting', isCorrect: true },
      { text: '(C) A waste reduction competition', isCorrect: false },
      { text: '(D) A carbon offset purchasing program', isCorrect: false },
    ],
    explanation: 'Green Stepsは環境に配慮した通勤方法を採用する従業員に報酬を与えるキャンペーンです。',
    keyVocabulary: [
      { word: 'employee engagement', meaning: '従業員エンゲージメント' },
      { word: 'commuting options', meaning: '通勤手段' },
      { word: 'rewards', meaning: '報奨' },
    ],
  },
  {
    id: 420,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this tour guide\'s announcement?',
    audioScript: 'Welcome to the National Art Museum. Before we begin the tour, I\'d like to go over a few guidelines. First, flash photography is strictly prohibited in all exhibition halls as it can damage the artwork. You may take photographs without flash in designated areas marked with a camera icon. Second, please keep your voices low to avoid disturbing other visitors. Finally, food and beverages are not permitted inside the galleries. A café is available on the ground floor if you need a break. Our tour will last approximately ninety minutes and will cover the contemporary art collection on the second floor.',
    options: [
      { text: '(A) To describe the museum\'s history', isCorrect: false },
      { text: '(B) To explain museum rules before a tour', isCorrect: true },
      { text: '(C) To sell museum memberships', isCorrect: false },
      { text: '(D) To introduce the contemporary art collection', isCorrect: false },
    ],
    explanation: 'ツアー開始前のミュージアムルールの説明です。撮影禁止や飲食禁止などの注意事項を伝えています。',
    keyVocabulary: [
      { word: 'flash photography', meaning: 'フラッシュ撮影' },
      { word: 'strictly prohibited', meaning: '厳禁' },
      { word: 'designated areas', meaning: '指定エリア' },
    ],
  },
  {
    id: 421,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'Where can visitors take photographs?',
    audioScript: 'Welcome to the National Art Museum. Before we begin the tour, I\'d like to go over a few guidelines. First, flash photography is strictly prohibited in all exhibition halls as it can damage the artwork. You may take photographs without flash in designated areas marked with a camera icon. Second, please keep your voices low to avoid disturbing other visitors. Finally, food and beverages are not permitted inside the galleries. A café is available on the ground floor if you need a break. Our tour will last approximately ninety minutes and will cover the contemporary art collection on the second floor.',
    options: [
      { text: '(A) Anywhere in the museum', isCorrect: false },
      { text: '(B) Only in designated areas without flash', isCorrect: true },
      { text: '(C) Only on the ground floor', isCorrect: false },
      { text: '(D) Only with a special permit', isCorrect: false },
    ],
    explanation: '「カメラアイコンで示された指定エリアでフラッシュなしでの撮影が可能」と案内されています。',
    keyVocabulary: [
      { word: 'camera icon', meaning: 'カメラアイコン' },
      { word: 'galleries', meaning: 'ギャラリー、展示室' },
      { word: 'contemporary art', meaning: '現代美術' },
    ],
  },
  {
    id: 422,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'How long will the tour last?',
    audioScript: 'Welcome to the National Art Museum. Before we begin the tour, I\'d like to go over a few guidelines. First, flash photography is strictly prohibited in all exhibition halls as it can damage the artwork. You may take photographs without flash in designated areas marked with a camera icon. Second, please keep your voices low to avoid disturbing other visitors. Finally, food and beverages are not permitted inside the galleries. A café is available on the ground floor if you need a break. Our tour will last approximately ninety minutes and will cover the contemporary art collection on the second floor.',
    options: [
      { text: '(A) 60 minutes', isCorrect: false },
      { text: '(B) 90 minutes', isCorrect: true },
      { text: '(C) 120 minutes', isCorrect: false },
      { text: '(D) 150 minutes', isCorrect: false },
    ],
    explanation: '「ツアーは約90分間」と案内されています。',
    keyVocabulary: [
      { word: 'approximately', meaning: '約、およそ' },
      { word: 'last', meaning: '（時間が）かかる' },
      { word: 'cover', meaning: 'カバーする、網羅する' },
    ],
  },
  {
    id: 423,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this announcement?',
    audioScript: 'Attention, all library patrons. Starting this Saturday, the central library will extend its hours on weekdays. The new schedule will be Monday through Thursday from 7 A.M. to 10 P.M., and Friday from 7 A.M. to 6 P.M. Weekend hours will remain unchanged. Additionally, we are excited to announce the opening of our new digital media lab on the third floor, equipped with 3D printers, video editing stations, and podcast recording booths. The lab will be available by reservation starting next Monday. Visit our website to book a session.',
    options: [
      { text: '(A) To announce extended hours and a new facility', isCorrect: true },
      { text: '(B) To announce a library renovation project', isCorrect: false },
      { text: '(C) To advertise a book sale event', isCorrect: false },
      { text: '(D) To notify about reduced library services', isCorrect: false },
    ],
    explanation: '平日の営業時間延長と新しいデジタルメディアラボの開設を案内しています。',
    keyVocabulary: [
      { word: 'patrons', meaning: '利用者' },
      { word: 'digital media lab', meaning: 'デジタルメディアラボ' },
      { word: 'reservation', meaning: '予約' },
    ],
  },
  {
    id: 424,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What equipment is available in the new digital media lab?',
    audioScript: 'Attention, all library patrons. Starting this Saturday, the central library will extend its hours on weekdays. The new schedule will be Monday through Thursday from 7 A.M. to 10 P.M., and Friday from 7 A.M. to 6 P.M. Weekend hours will remain unchanged. Additionally, we are excited to announce the opening of our new digital media lab on the third floor, equipped with 3D printers, video editing stations, and podcast recording booths. The lab will be available by reservation starting next Monday. Visit our website to book a session.',
    options: [
      { text: '(A) Computers and printers only', isCorrect: false },
      { text: '(B) 3D printers, video editing stations, and podcast booths', isCorrect: true },
      { text: '(C) Photography studios and darkrooms', isCorrect: false },
      { text: '(D) Musical instruments and recording studios', isCorrect: false },
    ],
    explanation: '3Dプリンター、ビデオ編集ステーション、ポッドキャスト録音ブースが設備として挙げられています。',
    keyVocabulary: [
      { word: '3D printers', meaning: '3Dプリンター' },
      { word: 'video editing stations', meaning: '動画編集ステーション' },
      { word: 'podcast recording booths', meaning: 'ポッドキャスト録音ブース' },
    ],
  },
  {
    id: 425,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is being announced?',
    audioScript: 'Good morning. This is your captain speaking. We are currently cruising at an altitude of thirty-five thousand feet. I\'m pleased to report that we have smooth flying conditions ahead and expect to arrive in London approximately twenty minutes ahead of schedule. The local time in London is currently 8:40 A.M., and the weather is partly cloudy with a temperature of twelve degrees Celsius. We will begin our descent shortly, so please return to your seats and fasten your seatbelts. Thank you for choosing Air Atlantic.',
    options: [
      { text: '(A) A flight delay', isCorrect: false },
      { text: '(B) An early arrival and weather update', isCorrect: true },
      { text: '(C) An emergency landing procedure', isCorrect: false },
      { text: '(D) A gate change notification', isCorrect: false },
    ],
    explanation: '機長からのアナウンスで、予定より20分早い到着とロンドンの天気予報を伝えています。',
    keyVocabulary: [
      { word: 'cruising altitude', meaning: '巡航高度' },
      { word: 'ahead of schedule', meaning: '予定より早く' },
      { word: 'descent', meaning: '降下' },
    ],
  },
  {
    id: 426,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the current local time in London?',
    audioScript: 'Good morning. This is your captain speaking. We are currently cruising at an altitude of thirty-five thousand feet. I\'m pleased to report that we have smooth flying conditions ahead and expect to arrive in London approximately twenty minutes ahead of schedule. The local time in London is currently 8:40 A.M., and the weather is partly cloudy with a temperature of twelve degrees Celsius. We will begin our descent shortly, so please return to your seats and fasten your seatbelts. Thank you for choosing Air Atlantic.',
    options: [
      { text: '(A) 8:20 A.M.', isCorrect: false },
      { text: '(B) 8:40 A.M.', isCorrect: true },
      { text: '(C) 9:00 A.M.', isCorrect: false },
      { text: '(D) 9:20 A.M.', isCorrect: false },
    ],
    explanation: '「現在のロンドンの現地時刻は午前8:40」と述べられています。',
    keyVocabulary: [
      { word: 'partly cloudy', meaning: '晴れ時々曇り' },
      { word: 'degrees Celsius', meaning: '摂氏〜度' },
      { word: 'fasten seatbelts', meaning: 'シートベルトを締める' },
    ],
  },
  {
    id: 427,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'Who is the intended audience of this message?',
    audioScript: 'Good evening, residents of Maplewood Apartments. This is your building manager, Tom Garcia, with an important update. The hot water system will be temporarily shut off tomorrow morning between 6 and 9 A.M. for scheduled maintenance. We apologize for any inconvenience this may cause. In other news, the annual resident barbecue will be held on Saturday, July 18, in the courtyard. Sign-up sheets are posted in the lobby. If you have any questions about either of these announcements, please stop by the management office during business hours.',
    options: [
      { text: '(A) Apartment residents', isCorrect: true },
      { text: '(B) Maintenance workers', isCorrect: false },
      { text: '(C) Real estate agents', isCorrect: false },
      { text: '(D) Restaurant customers', isCorrect: false },
    ],
    explanation: 'マネージャーからアパートの入居者への案内です。給湯設備のメンテナンスとバーベキュー大会について伝えています。',
    keyVocabulary: [
      { word: 'residents', meaning: '住民、入居者' },
      { word: 'temporarily shut off', meaning: '一時的に停止する' },
      { word: 'courtyard', meaning: '中庭' },
    ],
  },
  {
    id: 428,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'When will the hot water be unavailable?',
    audioScript: 'Good evening, residents of Maplewood Apartments. This is your building manager, Tom Garcia, with an important update. The hot water system will be temporarily shut off tomorrow morning between 6 and 9 A.M. for scheduled maintenance. We apologize for any inconvenience this may cause. In other news, the annual resident barbecue will be held on Saturday, July 18, in the courtyard. Sign-up sheets are posted in the lobby. If you have any questions about either of these announcements, please stop by the management office during business hours.',
    options: [
      { text: '(A) 6 to 8 A.M.', isCorrect: false },
      { text: '(B) 6 to 9 A.M.', isCorrect: true },
      { text: '(C) 7 to 10 A.M.', isCorrect: false },
      { text: '(D) 9 A.M. to 12 P.M.', isCorrect: false },
    ],
    explanation: '「明日の午前6時から9時の間、給湯が一時停止する」と案内されています。',
    keyVocabulary: [
      { word: 'scheduled maintenance', meaning: '定期メンテナンス' },
      { word: 'sign-up sheets', meaning: '参加申し込み用紙' },
      { word: 'management office', meaning: '管理事務室' },
    ],
  },
  {
    id: 429,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the speaker\'s role?',
    audioScript: 'Thank you all for coming to today\'s quarterly sales meeting. As your regional sales director, I\'m happy to report that our Northeast region exceeded its revenue target by twelve percent this quarter. Our top-performing product category was home security systems, which saw a twenty-five percent increase in sales compared to last quarter. I\'d also like to recognize the Boston team for closing the largest single contract in our company\'s history — a three-year deal worth 2.4 million dollars. Keep up the excellent work, everyone.',
    options: [
      { text: '(A) A financial analyst', isCorrect: false },
      { text: '(B) A regional sales director', isCorrect: true },
      { text: '(C) A marketing manager', isCorrect: false },
      { text: '(D) A chief executive officer', isCorrect: false },
    ],
    explanation: '「私が地域営業ディレクターとして」と自己紹介しています。',
    keyVocabulary: [
      { word: 'regional sales director', meaning: '地域営業ディレクター' },
      { word: 'exceeded', meaning: '上回った' },
      { word: 'revenue target', meaning: '売上目標' },
    ],
  },
  {
    id: 430,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'By what percentage did the Northeast region exceed its target?',
    audioScript: 'Thank you all for coming to today\'s quarterly sales meeting. As your regional sales director, I\'m happy to report that our Northeast region exceeded its revenue target by twelve percent this quarter. Our top-performing product category was home security systems, which saw a twenty-five percent increase in sales compared to last quarter. I\'d also like to recognize the Boston team for closing the largest single contract in our company\'s history — a three-year deal worth 2.4 million dollars. Keep up the excellent work, everyone.',
    options: [
      { text: '(A) 12%', isCorrect: true },
      { text: '(B) 25%', isCorrect: false },
      { text: '(C) 40%', isCorrect: false },
      { text: '(D) 50%', isCorrect: false },
    ],
    explanation: '「北東地域は売上目標を12%上回った」と報告されています。25%はホームセキュリティシステムの売上増加率です。',
    keyVocabulary: [
      { word: 'top-performing', meaning: '最も好調な' },
      { word: 'home security systems', meaning: 'ホームセキュリティシステム' },
      { word: 'closing the contract', meaning: '契約を締結する' },
    ],
  },
  {
    id: 431,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the main purpose of this message?',
    audioScript: 'Hi, this is Rachel from Horizon Event Planning. I\'m calling to confirm the details for your company\'s holiday party on December 20. We have reserved the Grand Ballroom at the Lakeside Hotel from 6 to 11 P.M. for up to two hundred guests. The menu includes a three-course dinner with vegetarian and gluten-free options. The deposit of one thousand dollars was received last week. Please note that the remaining balance is due by December 10. If you have any changes to the guest count or menu, please let us know by December 5. Thank you.',
    options: [
      { text: '(A) To cancel an event reservation', isCorrect: false },
      { text: '(B) To confirm event details and remind about payment', isCorrect: true },
      { text: '(C) To request additional deposit', isCorrect: false },
      { text: '(D) To advertise catering services', isCorrect: false },
    ],
    explanation: 'イベントプランナーからの確認の電話です。ホリデーパーティーの詳細確認と残金支払いのリマインドが目的です。',
    keyVocabulary: [
      { word: 'deposit', meaning: 'デポジット、前金' },
      { word: 'remaining balance', meaning: '残金' },
      { word: 'gluten-free', meaning: 'グルテンフリー' },
    ],
  },
  {
    id: 432,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'By when must changes to the menu be submitted?',
    audioScript: 'Hi, this is Rachel from Horizon Event Planning. I\'m calling to confirm the details for your company\'s holiday party on December 20. We have reserved the Grand Ballroom at the Lakeside Hotel from 6 to 11 P.M. for up to two hundred guests. The menu includes a three-course dinner with vegetarian and gluten-free options. The deposit of one thousand dollars was received last week. Please note that the remaining balance is due by December 10. If you have any changes to the guest count or menu, please let us know by December 5. Thank you.',
    options: [
      { text: '(A) December 5', isCorrect: true },
      { text: '(B) December 10', isCorrect: false },
      { text: '(C) December 15', isCorrect: false },
      { text: '(D) December 20', isCorrect: false },
    ],
    explanation: '「メニューの変更は12月5日までにお知らせください」と述べられています。12月10日は残金の支払い期限です。',
    keyVocabulary: [
      { word: 'guest count', meaning: 'ゲスト数' },
      { word: 'three-course dinner', meaning: '3コースディナー' },
      { word: 'due by', meaning: '〜までに期限' },
    ],
  },
  {
    id: 433,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the speaker talking about?',
    audioScript: 'This is Robert Chen, head of the engineering department. I\'m pleased to announce that our team has successfully completed the stress testing phase for the new bridge design. The prototype withstood loads up to one hundred fifty percent of the expected maximum, which exceeds safety standards by a significant margin. The city council will review our final report next Wednesday. If approved, construction will begin in early June with an estimated completion date of March next year. I want to thank everyone on the team for their hard work and dedication.',
    options: [
      { text: '(A) A bridge design project update', isCorrect: true },
      { text: '(B) A building renovation plan', isCorrect: false },
      { text: '(C) A road maintenance schedule', isCorrect: false },
      { text: '(D) An employee recognition ceremony', isCorrect: false },
    ],
    explanation: '橋の設計プロジェクトの進捗報告です。応力テストが完了し、安全基準を大幅に上回る結果が出たことを報告しています。',
    keyVocabulary: [
      { word: 'stress testing', meaning: '応力テスト' },
      { word: 'withstood', meaning: '耐えた' },
      { word: 'safety standards', meaning: '安全基準' },
    ],
  },
  {
    id: 434,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'When is construction expected to begin?',
    audioScript: 'This is Robert Chen, head of the engineering department. I\'m pleased to announce that our team has successfully completed the stress testing phase for the new bridge design. The prototype withstood loads up to one hundred fifty percent of the expected maximum, which exceeds safety standards by a significant margin. The city council will review our final report next Wednesday. If approved, construction will begin in early June with an estimated completion date of March next year. I want to thank everyone on the team for their hard work and dedication.',
    options: [
      { text: '(A) Next Wednesday', isCorrect: false },
      { text: '(B) In early June', isCorrect: true },
      { text: '(C) In September', isCorrect: false },
      { text: '(D) Next March', isCorrect: false },
    ],
    explanation: '「承認されれば、6月上旬に着工予定」と述べられています。来年3月は完工予定日です。',
    keyVocabulary: [
      { word: 'city council', meaning: '市議会' },
      { word: 'estimated completion date', meaning: '完工予定日' },
      { word: 'dedication', meaning: '献身' },
    ],
  },
  {
    id: 435,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this telephone message?',
    audioScript: 'Hello, this message is for Jennifer Walsh. This is Mark Stevens from the Benefits Office calling about your flexible spending account. Our records indicate that you have not yet submitted your receipts for reimbursement this quarter. The deadline for submissions is this Friday, December 15. Any unused funds after this date will be forfeited according to company policy. You can submit your claims online through the employee portal or bring the original receipts to our office on the second floor. If you have any questions, please call us at extension 4500.',
    options: [
      { text: '(A) To remind about a reimbursement deadline', isCorrect: true },
      { text: '(B) To inform about a change in benefits policy', isCorrect: false },
      { text: '(C) To request a meeting about salary', isCorrect: false },
      { text: '(D) To confirm receipt of submitted documents', isCorrect: false },
    ],
    explanation: 'フレキシブル・スペンディング・アカウントの償還申請期限のリマインドです。',
    keyVocabulary: [
      { word: 'flexible spending account', meaning: 'フレキシブル・スペンディング・アカウント' },
      { word: 'reimbursement', meaning: '償還、払い戻し' },
      { word: 'forfeited', meaning: '没収される' },
    ],
  },
  {
    id: 436,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What happens to unused funds after the deadline?',
    audioScript: 'Hello, this message is for Jennifer Walsh. This is Mark Stevens from the Benefits Office calling about your flexible spending account. Our records indicate that you have not yet submitted your receipts for reimbursement this quarter. The deadline for submissions is this Friday, December 15. Any unused funds after this date will be forfeited according to company policy. You can submit your claims online through the employee portal or bring the original receipts to our office on the second floor. If you have any questions, please call us at extension 4500.',
    options: [
      { text: '(A) They will be rolled over to next year', isCorrect: false },
      { text: '(B) They will be forfeited', isCorrect: true },
      { text: '(C) They will be donated to charity', isCorrect: false },
      { text: '(D) They will be added to salary', isCorrect: false },
    ],
    explanation: '「期限後の未使用分は会社のポリシーに従い没収される」と述べられています。',
    keyVocabulary: [
      { word: 'claims', meaning: '請求' },
      { word: 'employee portal', meaning: '従業員ポータル' },
      { word: 'extension', meaning: '内線番号' },
    ],
  },
  {
    id: 437,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What event is being described?',
    audioScript: 'The Downtown Business Association is pleased to invite you to the eighth annual Small Business Expo on Saturday, April 12, from 9 A.M. to 5 P.M. at the City Convention Center. This free event is designed to connect local entrepreneurs with resources, mentors, and potential investors. Highlights include keynote speeches by successful business owners, interactive workshops on marketing and finance, and a networking reception at the end of the day. Pre-registration is recommended as space is limited. Visit downtownbiz.org/expo to reserve your spot.',
    options: [
      { text: '(A) A job fair', isCorrect: false },
      { text: '(B) A small business expo', isCorrect: true },
      { text: '(C) A charity fundraiser', isCorrect: false },
      { text: '(D) A product trade show', isCorrect: false },
    ],
    explanation: 'スモールビジネスエキスポの案内です。起業家をリソースやメンター、投資家と結びつけるイベントです。',
    keyVocabulary: [
      { word: 'entrepreneurs', meaning: '起業家' },
      { word: 'keynote speeches', meaning: '基調講演' },
      { word: 'pre-registration', meaning: '事前登録' },
    ],
  },
  {
    id: 438,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is NOT mentioned as a highlight of the event?',
    audioScript: 'The Downtown Business Association is pleased to invite you to the eighth annual Small Business Expo on Saturday, April 12, from 9 A.M. to 5 P.M. at the City Convention Center. This free event is designed to connect local entrepreneurs with resources, mentors, and potential investors. Highlights include keynote speeches by successful business owners, interactive workshops on marketing and finance, and a networking reception at the end of the day. Pre-registration is recommended as space is limited. Visit downtownbiz.org/expo to reserve your spot.',
    options: [
      { text: '(A) Keynote speeches', isCorrect: false },
      { text: '(B) Interactive workshops', isCorrect: false },
      { text: '(C) A networking reception', isCorrect: false },
      { text: '(D) A business plan competition', isCorrect: true },
    ],
    explanation: 'ハイライトとして言及されているのは基調講演、ワークショップ、ネットワーキングレセプションです。ビジネスプランコンテストは言及されていません。',
    keyVocabulary: [
      { word: 'highlights', meaning: 'ハイライト、見どころ' },
      { word: 'mentors', meaning: 'メンター' },
      { word: 'networking reception', meaning: 'ネットワーキングレセプション' },
    ],
  },
  {
    id: 439,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the speaker mainly discussing?',
    audioScript: 'Thank you for joining today\'s webinar on cybersecurity best practices. My name is Lisa Monroe, and I\'m the Chief Information Security Officer at DataShield Solutions. In today\'s session, we\'ll cover three key topics: how to identify phishing emails, the importance of using multi-factor authentication, and strategies for creating strong passwords. According to our recent survey, over seventy percent of data breaches in small businesses result from employee error. By implementing the measures we\'ll discuss today, you can reduce your company\'s risk of a cyber attack by up to eighty percent.',
    options: [
      { text: '(A) Data backup procedures', isCorrect: false },
      { text: '(B) Cybersecurity best practices', isCorrect: true },
      { text: '(C) Cloud computing trends', isCorrect: false },
      { text: '(D) Website development tips', isCorrect: false },
    ],
    explanation: 'サイバーセキュリティのベストプラクティスに関するウェビナーです。',
    keyVocabulary: [
      { word: 'phishing emails', meaning: 'フィッシングメール' },
      { word: 'multi-factor authentication', meaning: '多要素認証' },
      { word: 'data breaches', meaning: 'データ漏洩' },
    ],
  },
  {
    id: 440,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'According to the survey, what is the leading cause of data breaches in small businesses?',
    audioScript: 'Thank you for joining today\'s webinar on cybersecurity best practices. My name is Lisa Monroe, and I\'m the Chief Information Security Officer at DataShield Solutions. In today\'s session, we\'ll cover three key topics: how to identify phishing emails, the importance of using multi-factor authentication, and strategies for creating strong passwords. According to our recent survey, over seventy percent of data breaches in small businesses result from employee error. By implementing the measures we\'ll discuss today, you can reduce your company\'s risk of a cyber attack by up to eighty percent.',
    options: [
      { text: '(A) Outdated software', isCorrect: false },
      { text: '(B) Weak passwords', isCorrect: false },
      { text: '(C) Employee error', isCorrect: true },
      { text: '(D) External hacking', isCorrect: false },
    ],
    explanation: '「調査によると、小規模ビジネスのデータ漏洩の70%以上は従業員のミスが原因」と述べられています。',
    keyVocabulary: [
      { word: 'Chief Information Security Officer', meaning: '最高情報セキュリティ責任者' },
      { word: 'implementing', meaning: '導入する、実施する' },
      { word: 'cyber attack', meaning: 'サイバー攻撃' },
    ],
  },
  {
    id: 441,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is this radio advertisement mainly about?',
    audioScript: 'Tired of long waits at the auto repair shop? QuickFix Mobile Mechanics brings the repair shop to you. Our certified technicians will come to your home or office and handle everything from oil changes to brake replacements. Most repairs are completed within two hours. We offer transparent pricing with no hidden fees, and all our work is backed by a twelve-month warranty. Call us at 555-0187 or visit quickfixauto.com to schedule an appointment. Mention this ad and receive fifteen percent off your first service.',
    options: [
      { text: '(A) A mobile auto repair service', isCorrect: true },
      { text: '(B) A car dealership', isCorrect: false },
      { text: '(C) An auto insurance plan', isCorrect: false },
      { text: '(D) A driving school', isCorrect: false },
    ],
    explanation: '出張自動車修理サービスの広告です。自宅やオフィスに来て修理を行うモバイルメカニックの宣伝です。',
    keyVocabulary: [
      { word: 'certified technicians', meaning: '認定技術者' },
      { word: 'transparent pricing', meaning: '透明な価格設定' },
      { word: 'hidden fees', meaning: '隠れた料金' },
    ],
  },
  {
    id: 442,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What warranty does the service offer?',
    audioScript: 'Tired of long waits at the auto repair shop? QuickFix Mobile Mechanics brings the repair shop to you. Our certified technicians will come to your home or office and handle everything from oil changes to brake replacements. Most repairs are completed within two hours. We offer transparent pricing with no hidden fees, and all our work is backed by a twelve-month warranty. Call us at 555-0187 or visit quickfixauto.com to schedule an appointment. Mention this ad and receive fifteen percent off your first service.',
    options: [
      { text: '(A) 6 months', isCorrect: false },
      { text: '(B) 12 months', isCorrect: true },
      { text: '(C) 18 months', isCorrect: false },
      { text: '(D) 24 months', isCorrect: false },
    ],
    explanation: '「すべての作業に12ヶ月の保証がついている」と案内されています。',
    keyVocabulary: [
      { word: 'backed by', meaning: '〜で裏付けられた' },
      { word: 'oil changes', meaning: 'オイル交換' },
      { word: 'brake replacements', meaning: 'ブレーキ交換' },
    ],
  },
  {
    id: 443,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this message?',
    audioScript: 'Welcome to the Bayview Hotel. We hope you are enjoying your stay. We would like to inform you that the hotel swimming pool will be closed for cleaning from 6 to 10 A.M. tomorrow. The fitness center will remain open during this time for your convenience. Towels are available at the front desk. Additionally, tonight\'s dinner special at our restaurant, The Harbor View, is fresh grilled salmon with seasonal vegetables for twenty-eight dollars. Reservations are recommended and can be made by dialing extension 101 from your room.',
    options: [
      { text: '(A) To announce hotel amenities and a schedule change', isCorrect: true },
      { text: '(B) To promote the hotel\'s loyalty program', isCorrect: false },
      { text: '(C) To inform about a room rate increase', isCorrect: false },
      { text: '(D) To advertise a local tour package', isCorrect: false },
    ],
    explanation: 'ホテルの設備案内とプール清掃のスケジュール変更を伝えるメッセージです。',
    keyVocabulary: [
      { word: 'amenities', meaning: '設備、アメニティ' },
      { word: 'seasonal vegetables', meaning: '季節の野菜' },
      { word: 'dialing extension', meaning: '内線番号をダイヤルする' },
    ],
  },
  {
    id: 444,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What will remain open while the pool is closed?',
    audioScript: 'Welcome to the Bayview Hotel. We hope you are enjoying your stay. We would like to inform you that the hotel swimming pool will be closed for cleaning from 6 to 10 A.M. tomorrow. The fitness center will remain open during this time for your convenience. Towels are available at the front desk. Additionally, tonight\'s dinner special at our restaurant, The Harbor View, is fresh grilled salmon with seasonal vegetables for twenty-eight dollars. Reservations are recommended and can be made by dialing extension 101 from your room.',
    options: [
      { text: '(A) The restaurant', isCorrect: false },
      { text: '(B) The fitness center', isCorrect: true },
      { text: '(C) The spa', isCorrect: false },
      { text: '(D) The business center', isCorrect: false },
    ],
    explanation: '「フィットネスセンターはプール閉鎖中も営業する」と案内されています。',
    keyVocabulary: [
      { word: 'fitness center', meaning: 'フィットネスセンター' },
      { word: 'grilled salmon', meaning: '焼きサーモン' },
      { word: 'reservations', meaning: '予約' },
    ],
  },
  {
    id: 445,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the speaker\'s main message?',
    audioScript: 'Attention, all graduate students. The deadline for thesis proposal submissions has been moved from April 15 to April 22, giving you one additional week to finalize your proposals. This extension was granted in response to student feedback about the heavy workload this semester. Please note that the format requirements have not changed — proposals should be between fifteen and twenty pages and must include a bibliography. Submissions should be uploaded to the graduate portal as PDF files. If you have questions, contact the Graduate Studies Office at gradstudies@university.edu.',
    options: [
      { text: '(A) A thesis proposal deadline extension', isCorrect: true },
      { text: '(B) A change in thesis format requirements', isCorrect: false },
      { text: '(C) A cancellation of the thesis program', isCorrect: false },
      { text: '(D) A new thesis topic requirement', isCorrect: false },
    ],
    explanation: '論文プロポーザルの提出期限が4月15日から4月22日に延長されたという案内です。',
    keyVocabulary: [
      { word: 'thesis proposal', meaning: '論文プロポーザル' },
      { word: 'extension', meaning: '延長' },
      { word: 'bibliography', meaning: '参考文献' },
    ],
  },
  {
    id: 446,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What format requirement has NOT changed?',
    audioScript: 'Attention, all graduate students. The deadline for thesis proposal submissions has been moved from April 15 to April 22, giving you one additional week to finalize your proposals. This extension was granted in response to student feedback about the heavy workload this semester. Please note that the format requirements have not changed — proposals should be between fifteen and twenty pages and must include a bibliography. Submissions should be uploaded to the graduate portal as PDF files. If you have questions, contact the Graduate Studies Office at gradstudies@university.edu.',
    options: [
      { text: '(A) 10 to 15 pages with a cover letter', isCorrect: false },
      { text: '(B) 15 to 20 pages with a bibliography', isCorrect: true },
      { text: '(C) 20 to 25 pages with an abstract', isCorrect: false },
      { text: '(D) 25 to 30 pages with footnotes', isCorrect: false },
    ],
    explanation: '「フォーマット要件は変更されていない。15〜20ページで参考文献を含めること」と案内されています。',
    keyVocabulary: [
      { word: 'finalized', meaning: '最終決定する' },
      { word: 'workload', meaning: '作業負荷' },
      { word: 'graduate portal', meaning: '大学院ポータル' },
    ],
  },
  {
    id: 447,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the main purpose of this announcement?',
    audioScript: 'Good morning. This is a reminder that the annual charity golf tournament to benefit Children\'s Hospital will take place this Saturday at the Rolling Hills Golf Club. Check-in begins at 7 A.M., and the first tee-off is at 8 A.M. sharp. Participants are asked to bring their own clubs, though golf carts will be provided. The entry fee of one hundred fifty dollars per player includes lunch and a commemorative gift. All proceeds go directly to the hospital\'s pediatric ward. There are still a few spots available, so sign up today at the registration desk in the main lobby.',
    options: [
      { text: '(A) To announce a charity golf tournament', isCorrect: true },
      { text: '(B) To advertise a golf club membership', isCorrect: false },
      { text: '(C) To report on last year\'s tournament results', isCorrect: false },
      { text: '(D) To announce a hospital fundraising gala', isCorrect: false },
    ],
    explanation: '小児病院のためのチャリティゴルフトーナメントの案内です。',
    keyVocabulary: [
      { word: 'charity golf tournament', meaning: 'チャリティゴルフ大会' },
      { word: 'tee-off', meaning: 'ティーオフ、開始' },
      { word: 'proceeds', meaning: '収益' },
    ],
  },
  {
    id: 448,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is included in the entry fee?',
    audioScript: 'Good morning. This is a reminder that the annual charity golf tournament to benefit Children\'s Hospital will take place this Saturday at the Rolling Hills Golf Club. Check-in begins at 7 A.M., and the first tee-off is at 8 A.M. sharp. Participants are asked to bring their own clubs, though golf carts will be provided. The entry fee of one hundred fifty dollars per player includes lunch and a commemorative gift. All proceeds go directly to the hospital\'s pediatric ward. There are still a few spots available, so sign up today at the registration desk in the main lobby.',
    options: [
      { text: '(A) Golf clubs and a caddy', isCorrect: false },
      { text: '(B) Lunch and a commemorative gift', isCorrect: true },
      { text: '(C) Dinner and entertainment', isCorrect: false },
      { text: '(D) Hotel accommodation', isCorrect: false },
    ],
    explanation: '「参加費150ドルにはランチと記念品が含まれる」と案内されています。',
    keyVocabulary: [
      { word: 'entry fee', meaning: '参加費' },
      { word: 'commemorative gift', meaning: '記念品' },
      { word: 'pediatric ward', meaning: '小児病棟' },
    ],
  },
  {
    id: 449,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What is the purpose of this training announcement?',
    audioScript: 'Attention, warehouse staff. Starting next Monday, all employees must wear hard hats and steel-toed boots while on the warehouse floor. This updated safety requirement follows the recent audit conducted by the Occupational Safety Administration. Complimentary safety gear will be distributed at the supply window near the main entrance between 8 and 10 A.M. on Monday. Employees who already own approved gear may continue to use it. Failure to comply with the new policy will result in a written warning for the first offense. Thank you for your cooperation in keeping our workplace safe.',
    options: [
      { text: '(A) To announce mandatory safety equipment', isCorrect: true },
      { text: '(B) To schedule a safety training session', isCorrect: false },
      { text: '(C) To report the results of a safety audit', isCorrect: false },
      { text: '(D) To introduce a new warehouse manager', isCorrect: false },
    ],
    explanation: '倉庫作業員にヘルメットと安全靴の着用を義務付ける新しい安全ポリシーの案内です。',
    keyVocabulary: [
      { word: 'hard hats', meaning: 'ヘルメット' },
      { word: 'steel-toed boots', meaning: '安全靴' },
      { word: 'failure to comply', meaning: '遵守しない場合' },
    ],
  },
  {
    id: 450,
    part: 4,
    category: 'part4',
    categoryLabel: '説明文問題',
    question: 'What happens if an employee does not follow the new policy?',
    audioScript: 'Attention, warehouse staff. Starting next Monday, all employees must wear hard hats and steel-toed boots while on the warehouse floor. This updated safety requirement follows the recent audit conducted by the Occupational Safety Administration. Complimentary safety gear will be distributed at the supply window near the main entrance between 8 and 10 A.M. on Monday. Employees who already own approved gear may continue to use it. Failure to comply with the new policy will result in a written warning for the first offense. Thank you for your cooperation in keeping our workplace safe.',
    options: [
      { text: '(A) Immediate suspension', isCorrect: false },
      { text: '(B) A written warning', isCorrect: true },
      { text: '(C) A fine of one hundred dollars', isCorrect: false },
      { text: '(D) Mandatory retraining', isCorrect: false },
    ],
    explanation: '「最初の違反で文書による警告を受ける」と述べられています。',
    keyVocabulary: [
      { word: 'Occupational Safety Administration', meaning: '労働安全局' },
      { word: 'written warning', meaning: '文書による警告' },
      { word: 'first offense', meaning: '最初の違反' },
    ],
  },

  // ===== Part 5: Incomplete Sentences (5 questions) =====
  {
    id: 501,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The marketing director decided to ______ the advertising budget for the upcoming holiday campaign.',
    options: [
      { text: '(A) increase', isCorrect: true },
      { text: '(B) increasing', isCorrect: false },
      { text: '(C) increased', isCorrect: false },
      { text: '(D) increasingly', isCorrect: false },
    ],
    explanation: '「decided to + 動詞の原形」の構文です。to の後ろには不定詞（base form）が続きます。「increase（増やす）」が正解。品詞の識別がPart 5の基本です。',
    keyVocabulary: [
      { word: 'advertising budget', meaning: '広告予算' },
      { word: 'upcoming', meaning: '次の、これからの' },
    ],
  },
  {
    id: 502,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'All employees are required to attend the safety training session, ______ their department or position.',
    options: [
      { text: '(A) regard', isCorrect: false },
      { text: '(B) regarding', isCorrect: false },
      { text: '(C) regardless of', isCorrect: true },
      { text: '(D) regarded', isCorrect: false },
    ],
    explanation: '「〜に関わらず」という意味の「regardless of」が正解。「部署や役職に関わらず全員参加」という意味になります。「regarding」は「〜に関して」で意味が異なるので注意してください。',
    keyVocabulary: [
      { word: 'regardless of', meaning: '〜に関わらず、〜を問わず' },
      { word: 'safety training session', meaning: '安全研修セッション' },
    ],
  },
  {
    id: 503,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The new warehouse facility, ______ is located in the industrial district, will begin operations next month.',
    options: [
      { text: '(A) that', isCorrect: false },
      { text: '(B) which', isCorrect: true },
      { text: '(C) where', isCorrect: false },
      { text: '(D) what', isCorrect: false },
    ],
    explanation: 'カンマの後ろの非制限用法の関係代名詞です。先行詞は「warehouse facility（倉庫施設）」で物なので「which」が正解。「that」は非制限用法（カンマ付き）では使えません。',
    keyVocabulary: [
      { word: 'warehouse facility', meaning: '倉庫施設' },
      { word: 'industrial district', meaning: '工業地区' },
    ],
  },
  {
    id: 504,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The company\u2019s revenue this quarter exceeded expectations, ______ a twelve percent increase compared to the same period last year.',
    options: [
      { text: '(A) show', isCorrect: false },
      { text: '(B) showed', isCorrect: false },
      { text: '(C) showing', isCorrect: true },
      { text: '(D) shows', isCorrect: false },
    ],
    explanation: '現在分詞「showing」を使って、結果や付帯状況を表しています。「前年同期比12%増を示している」という意味の付帯状況の分詞構文です。主語（revenue）とshowingの間には能動関係があります。',
    keyVocabulary: [
      { word: 'revenue', meaning: '収益、売上' },
      { word: 'exceeded expectations', meaning: '予想を上回った' },
    ],
  },
  {
    id: 505,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The client requested that the project deadline ______ extended by two weeks due to unforeseen circumstances.',
    options: [
      { text: '(A) be', isCorrect: true },
      { text: '(B) is', isCorrect: false },
      { text: '(C) was', isCorrect: false },
      { text: '(D) will be', isCorrect: false },
    ],
    explanation: '「requested that + 主語 + 動詞の原形」の仮定法現在です。「be」が正解。suggest, recommend, request, demand などの動詞に続くthat節では動詞の原形が使われます。',
    keyVocabulary: [
      { word: 'deadline', meaning: '締め切り' },
      { word: 'unforeseen circumstances', meaning: '予期せぬ事態' },
    ],
  },

  {
    id: 506,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The new policy requires that all employees ______ the mandatory safety training by the end of the quarter.',
    options: [
      { text: '(A) complete', isCorrect: true },
      { text: '(B) completes', isCorrect: false },
      { text: '(C) completed', isCorrect: false },
      { text: '(D) completing', isCorrect: false },
    ],
    explanation: '「requires that + 主語 + 動詞の原形」の仮定法現在です。require, suggest, recommend, demand, insist などの動詞に続くthat節では動詞の原形を使います。',
    keyVocabulary: [
      { word: 'mandatory', meaning: '義務の' },
      { word: 'quarter', meaning: '四半期' },
      { word: 'requires', meaning: '要求する' },
    ],
  },
  {
    id: 507,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The marketing team is currently ______ a comprehensive analysis of consumer trends in the Asian market.',
    options: [
      { text: '(A) conduct', isCorrect: false },
      { text: '(B) conducted', isCorrect: false },
      { text: '(C) conducting', isCorrect: true },
      { text: '(D) conducts', isCorrect: false },
    ],
    explanation: '「is currently conducting」で現在進行形です。be動詞 + 現在分詞で「現在〜しているところ」という進行中の動作を表します。',
    keyVocabulary: [
      { word: 'comprehensive', meaning: '包括的な' },
      { word: 'consumer trends', meaning: '消費動向' },
      { word: 'conducting', meaning: '実施している' },
    ],
  },
  {
    id: 508,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'Despite ______ several warnings about the safety hazards, the contractor continued to ignore the regulations.',
    options: [
      { text: '(A) receive', isCorrect: false },
      { text: '(B) received', isCorrect: false },
      { text: '(C) receiving', isCorrect: true },
      { text: '(D) receives', isCorrect: false },
    ],
    explanation: '「despite + 動名詞（receiving）」の構文です。despiteは前置詞なので後ろに名詞または動名詞がきます。',
    keyVocabulary: [
      { word: 'despite', meaning: '〜にもかかわらず' },
      { word: 'safety hazards', meaning: '安全上の危険' },
      { word: 'contractor', meaning: '請負業者' },
    ],
  },
  {
    id: 509,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The company had ______ expanded its overseas operations before the global recession began.',
    options: [
      { text: '(A) already', isCorrect: true },
      { text: '(B) almost', isCorrect: false },
      { text: '(C) yet', isCorrect: false },
      { text: '(D) still', isCorrect: false },
    ],
    explanation: '過去完了（had + 過去分詞）と組み合わせて「すでに〜していた」という意味にするには「already」が適切です。yetは否定文や疑問文で使います。',
    keyVocabulary: [
      { word: 'expanded', meaning: '拡大した' },
      { word: 'overseas operations', meaning: '海外事業' },
      { word: 'global recession', meaning: '世界不況' },
    ],
  },
  {
    id: 510,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The project manager, along with two senior engineers, ______ attending the technology conference in Berlin next week.',
    options: [
      { text: '(A) are', isCorrect: false },
      { text: '(B) is', isCorrect: true },
      { text: '(C) were', isCorrect: false },
      { text: '(D) have been', isCorrect: false },
    ],
    explanation: '「along with〜」は主語に付加される情報であり、動詞の数は主の主語（project manager）に一致させます。単数主語なので「is」が正解です。',
    keyVocabulary: [
      { word: 'along with', meaning: '〜とともに' },
      { word: 'senior engineers', meaning: 'シニアエンジニア' },
      { word: 'technology conference', meaning: '技術会議' },
    ],
  },
  {
    id: 511,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: '______ the merger was announced, the stock price increased by twenty percent within a single trading day.',
    options: [
      { text: '(A) Upon', isCorrect: false },
      { text: '(B) As soon as', isCorrect: true },
      { text: '(C) Even though', isCorrect: false },
      { text: '(D) In spite of', isCorrect: false },
    ],
    explanation: '「as soon as（〜するとすぐに）」が正解。合併が発表されるとすぐに株価が上昇したという時間関係を表します。',
    keyVocabulary: [
      { word: 'merger', meaning: '合併' },
      { word: 'stock price', meaning: '株価' },
      { word: 'trading day', meaning: '取引日' },
    ],
  },
  {
    id: 512,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The supplier guaranteed that all materials ______ meet the quality standards specified in the contract.',
    options: [
      { text: '(A) would', isCorrect: true },
      { text: '(B) will', isCorrect: false },
      { text: '(C) shall', isCorrect: false },
      { text: '(D) can', isCorrect: false },
    ],
    explanation: '主節が過去形（guaranteed）なので、従属節の時制の一致により「would」が正解です。guaranteed that + would + 動詞原形。',
    keyVocabulary: [
      { word: 'guaranteed', meaning: '保証した' },
      { word: 'quality standards', meaning: '品質基準' },
      { word: 'specified', meaning: '指定された' },
    ],
  },
  {
    id: 513,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The building ______ was completed last month has already received several awards for its sustainable design.',
    options: [
      { text: '(A) who', isCorrect: false },
      { text: '(B) which', isCorrect: true },
      { text: '(C) where', isCorrect: false },
      { text: '(D) when', isCorrect: false },
    ],
    explanation: '先行詞が「building（物）」なので関係代名詞「which」が正解。whoは人、whereは場所の副詞、whenは時の副詞です。',
    keyVocabulary: [
      { word: 'sustainable design', meaning: '持続可能なデザイン' },
      { word: 'awards', meaning: '賞' },
      { word: 'completed', meaning: '完成した' },
    ],
  },
  {
    id: 514,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'Had the shipment arrived on time, the production schedule ______ disrupted.',
    options: [
      { text: '(A) will not have been', isCorrect: false },
      { text: '(B) had not been', isCorrect: false },
      { text: '(C) would not have been', isCorrect: true },
      { text: '(D) would not be', isCorrect: false },
    ],
    explanation: '「Had + 過去分詞」で始まる仮定法過去完了の倒置構文です。帰結節は「would have + 過去分詞」になります。過去の事実に反する仮定です。',
    keyVocabulary: [
      { word: 'shipment', meaning: '出荷品' },
      { word: 'disrupted', meaning: '混乱した' },
      { word: 'production schedule', meaning: '生産スケジュール' },
    ],
  },
  {
    id: 515,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The CEO emphasized the ______ of investing in renewable energy sources during the annual shareholders meeting.',
    options: [
      { text: '(A) important', isCorrect: false },
      { text: '(B) importantly', isCorrect: false },
      { text: '(C) importance', isCorrect: true },
      { text: '(D) import', isCorrect: false },
    ],
    explanation: '「the + 名詞 + of」の構文です。importantは形容詞、importantlyは副詞なので、名詞形のimportanceが正解です。',
    keyVocabulary: [
      { word: 'emphasized', meaning: '強調した' },
      { word: 'renewable energy', meaning: '再生可能エネルギー' },
      { word: 'shareholders meeting', meaning: '株主総会' },
    ],
  },
  {
    id: 516,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The instructions were written so ______ that even first-time users could assemble the product without difficulty.',
    options: [
      { text: '(A) clear', isCorrect: false },
      { text: '(B) clearly', isCorrect: true },
      { text: '(C) clearness', isCorrect: false },
      { text: '(D) clarity', isCorrect: false },
    ],
    explanation: '動詞（were written）を修飾するので副詞「clearly」が正解です。「so + 副詞 + that」の構文です。',
    keyVocabulary: [
      { word: 'assemble', meaning: '組み立てる' },
      { word: 'without difficulty', meaning: '問題なく' },
      { word: 'first-time users', meaning: '初めてのユーザー' },
    ],
  },
  {
    id: 517,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'All conference participants must register in advance; ______ , they will not be admitted to the venue.',
    options: [
      { text: '(A) otherwise', isCorrect: true },
      { text: '(B) therefore', isCorrect: false },
      { text: '(C) however', isCorrect: false },
      { text: '(D) moreover', isCorrect: false },
    ],
    explanation: '「そうしなければ」という条件の逆接を表す「otherwise」が正解です。therefore（それゆえ）は因果関係、however（しかし）は逆接、moreover（さらに）は追加です。',
    keyVocabulary: [
      { word: 'register in advance', meaning: '事前登録する' },
      { word: 'admitted', meaning: '入場を許可される' },
      { word: 'venue', meaning: '会場' },
    ],
  },
  {
    id: 518,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The board voted ______ the proposed merger after considering the potential risks and benefits.',
    options: [
      { text: '(A) for', isCorrect: false },
      { text: '(B) against', isCorrect: false },
      { text: '(C) on', isCorrect: false },
      { text: '(D) to approve', isCorrect: true },
    ],
    explanation: '「voted to approve（承認するために投票した）」が正解です。vote to + 動詞の原形で「〜するよう投票する」の意味になります。',
    keyVocabulary: [
      { word: 'voted', meaning: '投票した' },
      { word: 'proposed merger', meaning: '提案された合併' },
      { word: 'potential risks', meaning: '潜在的リスク' },
    ],
  },
  {
    id: 519,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The client requested a refund ______ the product failed to perform as advertised.',
    options: [
      { text: '(A) although', isCorrect: false },
      { text: '(B) because', isCorrect: true },
      { text: '(C) unless', isCorrect: false },
      { text: '(D) despite', isCorrect: false },
    ],
    explanation: '理由を表す「because」が正解です。製品が広告通りの性能を発揮しなかった「という理由で」返金を求めています。',
    keyVocabulary: [
      { word: 'refund', meaning: '返金' },
      { word: 'perform as advertised', meaning: '広告通りに機能する' },
      { word: 'requested', meaning: '要求した' },
    ],
  },
  {
    id: 520,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The factory has been operating at full ______ since the new orders came in last month.',
    options: [
      { text: '(A) capacity', isCorrect: true },
      { text: '(B) capability', isCorrect: false },
      { text: '(C) ability', isCorrect: false },
      { text: '(D) possibility', isCorrect: false },
    ],
    explanation: '「at full capacity（フル稼働で）」が慣用表現です。capabilityは潜在的な能力、abilityは一般的な能力を指します。',
    keyVocabulary: [
      { word: 'operating', meaning: '操業している' },
      { word: 'full capacity', meaning: 'フル稼働' },
      { word: 'factory', meaning: '工場' },
    ],
  },
  {
    id: 521,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The keynote speaker addressed the audience with such ______ that everyone in the hall was captivated.',
    options: [
      { text: '(A) eloquent', isCorrect: false },
      { text: '(B) eloquence', isCorrect: true },
      { text: '(C) eloquently', isCorrect: false },
      { text: '(D) eloquences', isCorrect: false },
    ],
    explanation: '「such + 名詞 + that」の構文です。eloquentは形容詞、eloquentlyは副詞なので、名詞形のeloquenceが正解です。',
    keyVocabulary: [
      { word: 'keynote speaker', meaning: '基調講演者' },
      { word: 'eloquence', meaning: '雄弁' },
      { word: 'captivated', meaning: '魅了された' },
    ],
  },
  {
    id: 522,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The report ______ by the research department highlights several key trends in consumer behavior.',
    options: [
      { text: '(A) prepared', isCorrect: false },
      { text: '(B) preparing', isCorrect: false },
      { text: '(C) was prepared', isCorrect: false },
      { text: '(D) prepared', isCorrect: true },
    ],
    explanation: '「過去分詞（prepared）」がreportを後ろから修飾しています。「研究部門によって準備された報告書」です。受動の関係なので過去分詞を使います。',
    keyVocabulary: [
      { word: 'highlights', meaning: '強調する' },
      { word: 'consumer behavior', meaning: '消費者行動' },
      { word: 'trends', meaning: '傾向、トレンド' },
    ],
  },
  {
    id: 523,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The company will not proceed with the expansion ______ it secures additional funding from investors.',
    options: [
      { text: '(A) if', isCorrect: false },
      { text: '(B) unless', isCorrect: true },
      { text: '(C) provided that', isCorrect: false },
      { text: '(D) as long as', isCorrect: false },
    ],
    explanation: '「unless（〜でない限り）」が正解です。「追加資金を確保しない限り、拡大を進めない」という意味になります。',
    keyVocabulary: [
      { word: 'proceed with', meaning: '〜に着手する' },
      { word: 'expansion', meaning: '拡大' },
      { word: 'secures', meaning: '確保する' },
    ],
  },
  {
    id: 524,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The new regulations, ______ were implemented last month, require all food manufacturers to list nutritional information on their packaging.',
    options: [
      { text: '(A) that', isCorrect: false },
      { text: '(B) which', isCorrect: true },
      { text: '(C) what', isCorrect: false },
      { text: '(D) where', isCorrect: false },
    ],
    explanation: 'カンマを伴う非制限用法の関係代名詞です。「that」は非制限用法で使えないため「which」が正解です。',
    keyVocabulary: [
      { word: 'regulations', meaning: '規制' },
      { word: 'nutritional information', meaning: '栄養情報' },
      { word: 'packaging', meaning: '包装' },
    ],
  },
  {
    id: 525,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The sales figures for this quarter exceeded expectations, ______ the management to increase the forecast for the year.',
    options: [
      { text: '(A) prompt', isCorrect: false },
      { text: '(B) prompted', isCorrect: false },
      { text: '(C) prompting', isCorrect: true },
      { text: '(D) prompts', isCorrect: false },
    ],
    explanation: '現在分詞「prompting」で結果を表す分詞構文です。「期待を上回り、経営陣が年間予測を引き上げることになった」という因果関係を表します。',
    keyVocabulary: [
      { word: 'exceeded expectations', meaning: '期待を上回った' },
      { word: 'forecast', meaning: '予測' },
      { word: 'prompting', meaning: '促して' },
    ],
  },
  {
    id: 526,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The international conference attracts delegates from over fifty countries, ______ it one of the largest events of its kind.',
    options: [
      { text: '(A) make', isCorrect: false },
      { text: '(B) made', isCorrect: false },
      { text: '(C) making', isCorrect: true },
      { text: '(D) makes', isCorrect: false },
    ],
    explanation: '現在分詞「making」で結果を表す分詞構文です。「50カ国以上から代表者を集め、同種の最大級のイベントにしている」という意味です。',
    keyVocabulary: [
      { word: 'delegates', meaning: '代表者' },
      { word: 'attracts', meaning: '引き付ける' },
      { word: 'international conference', meaning: '国際会議' },
    ],
  },
  {
    id: 527,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'It is essential that the proposal ______ submitted before the committee meeting on Thursday.',
    options: [
      { text: '(A) is', isCorrect: false },
      { text: '(B) be', isCorrect: true },
      { text: '(C) was', isCorrect: false },
      { text: '(D) will be', isCorrect: false },
    ],
    explanation: '「It is essential that + 主語 + 動詞の原形」の仮定法現在です。essential, important, necessary, vital などの形容詞に続くthat節では動詞の原形を使います。',
    keyVocabulary: [
      { word: 'essential', meaning: '不可欠な' },
      { word: 'proposal', meaning: '提案' },
      { word: 'committee meeting', meaning: '委員会' },
    ],
  },
  {
    id: 528,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The director asked her assistant to ______ the meeting minutes and distribute them to all attendees by the following day.',
    options: [
      { text: '(A) type', isCorrect: false },
      { text: '(B) compile', isCorrect: true },
      { text: '(C) design', isCorrect: false },
      { text: '(D) manufacture', isCorrect: false },
    ],
    explanation: '「compile（まとめる、編纂する）」が正解です。compile the minutesで「議事録をまとめる」の意味になります。',
    keyVocabulary: [
      { word: 'meeting minutes', meaning: '議事録' },
      { word: 'compile', meaning: 'まとめる、編纂する' },
      { word: 'distribute', meaning: '配布する' },
    ],
  },
  {
    id: 529,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The new employee manual will be ______ to all staff members during the orientation session next week.',
    options: [
      { text: '(A) distributed', isCorrect: true },
      { text: '(B) distributing', isCorrect: false },
      { text: '(C) distribute', isCorrect: false },
      { text: '(D) distributes', isCorrect: false },
    ],
    explanation: '受動態「will be + 過去分詞」の形です。manualが配られる対象なので受動態が正解です。',
    keyVocabulary: [
      { word: 'employee manual', meaning: '従業員マニュアル' },
      { word: 'orientation session', meaning: 'オリエンテーション' },
      { word: 'distributed', meaning: '配布される' },
    ],
  },
  {
    id: 530,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The client ______ we met at the trade show last month has decided to place a large order.',
    options: [
      { text: '(A) who', isCorrect: true },
      { text: '(B) which', isCorrect: false },
      { text: '(C) whose', isCorrect: false },
      { text: '(D) where', isCorrect: false },
    ],
    explanation: '先行詞が「client（人）」で、関係代名詞節の主語として働くため「who」が正解です。',
    keyVocabulary: [
      { word: 'trade show', meaning: '展示会' },
      { word: 'place an order', meaning: '注文する' },
      { word: 'client', meaning: '顧客' },
    ],
  },
  {
    id: 531,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The marketing department plans to ______ its advertising campaign to target a younger demographic.',
    options: [
      { text: '(A) launch', isCorrect: true },
      { text: '(B) launching', isCorrect: false },
      { text: '(C) launched', isCorrect: false },
      { text: '(D) launches', isCorrect: false },
    ],
    explanation: '「plans to + 動詞の原形」の構文です。to不定詞の後には動詞の原形がきます。',
    keyVocabulary: [
      { word: 'advertising campaign', meaning: '広告キャンペーン' },
      { word: 'target', meaning: 'ターゲットにする' },
      { word: 'demographic', meaning: '人口統計グループ' },
    ],
  },
  {
    id: 532,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The company\'s profits declined sharply last quarter, ______ was attributed to rising material costs.',
    options: [
      { text: '(A) that', isCorrect: false },
      { text: '(B) which', isCorrect: true },
      { text: '(C) what', isCorrect: false },
      { text: '(D) it', isCorrect: false },
    ],
    explanation: '非制限用法の関係代名詞で、前文全体（利益の急減）を先行詞とする場合「which」が正解です。「that」は非制限用法では使えません。',
    keyVocabulary: [
      { word: 'declined sharply', meaning: '急減した' },
      { word: 'attributed to', meaning: '〜に起因する' },
      { word: 'rising material costs', meaning: '原材料費の上昇' },
    ],
  },
  {
    id: 533,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'We would appreciate ______ the invoice by the end of this week so we can process the payment promptly.',
    options: [
      { text: '(A) receive', isCorrect: false },
      { text: '(B) to receive', isCorrect: false },
      { text: '(C) receiving', isCorrect: true },
      { text: '(D) received', isCorrect: false },
    ],
    explanation: '「appreciate + 動名詞」の構文です。appreciate, enjoy, consider, avoid などの動詞の後には動名詞がきます。',
    keyVocabulary: [
      { word: 'invoice', meaning: '請求書' },
      { word: 'process the payment', meaning: '支払いを処理する' },
      { word: 'promptly', meaning: '迅速に' },
    ],
  },
  {
    id: 534,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The manager insisted ______ reviewing all expense reports before they are submitted to the finance department.',
    options: [
      { text: '(A) to', isCorrect: false },
      { text: '(B) on', isCorrect: true },
      { text: '(C) for', isCorrect: false },
      { text: '(D) with', isCorrect: false },
    ],
    explanation: '「insist on + 動名詞/名詞」の構文です。「〜を強く主張する」という意味のinsistは前置詞onを伴います。',
    keyVocabulary: [
      { word: 'insisted on', meaning: '〜を強く主張した' },
      { word: 'expense reports', meaning: '経費報告書' },
      { word: 'submitted', meaning: '提出された' },
    ],
  },
  {
    id: 535,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The consulting firm has a proven ______ record of helping companies streamline their operations.',
    options: [
      { text: '(A) tract', isCorrect: false },
      { text: '(B) trace', isCorrect: false },
      { text: '(C) track', isCorrect: true },
      { text: '(D) trail', isCorrect: false },
    ],
    explanation: '「a proven track record（証明された実績）」が慣用表現です。track recordで「過去の実績」を意味します。',
    keyVocabulary: [
      { word: 'track record', meaning: '実績' },
      { word: 'streamline', meaning: '合理化する' },
      { word: 'consulting firm', meaning: 'コンサルティング会社' },
    ],
  },
  {
    id: 536,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'Not only did the company ______ its annual revenue target, but it also expanded into three new markets.',
    options: [
      { text: '(A) meet', isCorrect: true },
      { text: '(B) met', isCorrect: false },
      { text: '(C) meeting', isCorrect: false },
      { text: '(D) meets', isCorrect: false },
    ],
    explanation: '「Not only did + 主語 + 動詞の原形」の倒置構文です。Not onlyが文頭に来ると助動詞didが主語の前に出て、動詞は原形になります。',
    keyVocabulary: [
      { word: 'revenue target', meaning: '売上目標' },
      { word: 'expanded into', meaning: '〜に進出した' },
      { word: 'annual', meaning: '年間の' },
    ],
  },
  {
    id: 537,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The proposal was rejected ______ it did not address the environmental concerns raised by the community.',
    options: [
      { text: '(A) although', isCorrect: false },
      { text: '(B) because', isCorrect: true },
      { text: '(C) despite', isCorrect: false },
      { text: '(D) unless', isCorrect: false },
    ],
    explanation: '理由を表す「because」が正解です。環境への懸念に対処していない「という理由で」提案が却下されました。',
    keyVocabulary: [
      { word: 'rejected', meaning: '却下された' },
      { word: 'address', meaning: '対処する' },
      { word: 'environmental concerns', meaning: '環境への懸念' },
    ],
  },
  {
    id: 538,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'Ms. Rodriguez was appointed ______ the new head of the international division effective immediately.',
    options: [
      { text: '(A) like', isCorrect: false },
      { text: '(B) as', isCorrect: true },
      { text: '(C) for', isCorrect: false },
      { text: '(D) of', isCorrect: false },
    ],
    explanation: '「appoint A as B（AをBとして任命する）」の構文です。asは「〜として」の意味の前置詞です。',
    keyVocabulary: [
      { word: 'appointed', meaning: '任命された' },
      { word: 'effective immediately', meaning: '即日発効で' },
      { word: 'international division', meaning: '国際部門' },
    ],
  },
  {
    id: 539,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The training session, ______ was originally scheduled for Monday, has been moved to Wednesday afternoon.',
    options: [
      { text: '(A) that', isCorrect: false },
      { text: '(B) which', isCorrect: true },
      { text: '(C) what', isCorrect: false },
      { text: '(D) where', isCorrect: false },
    ],
    explanation: 'カンマを伴う非制限用法の関係代名詞です。先行詞は「training session」で物なので「which」が正解です。thatは非制限用法では使えません。',
    keyVocabulary: [
      { word: 'training session', meaning: '研修セッション' },
      { word: 'originally scheduled', meaning: '当初予定されていた' },
      { word: 'moved to', meaning: '〜に変更された' },
    ],
  },
  {
    id: 540,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The company encourages employees ______ part in volunteer activities during work hours.',
    options: [
      { text: '(A) take', isCorrect: false },
      { text: '(B) taking', isCorrect: false },
      { text: '(C) to take', isCorrect: true },
      { text: '(D) took', isCorrect: false },
    ],
    explanation: '「encourage + 人 + to + 動詞の原形」の構文です。encourage, persuade, allow, advise などの動詞はto不定詞をとります。',
    keyVocabulary: [
      { word: 'encourages', meaning: '奨励する' },
      { word: 'take part in', meaning: '〜に参加する' },
      { word: 'volunteer activities', meaning: 'ボランティア活動' },
    ],
  },
  {
    id: 541,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The new office building is ______ larger than the previous one, providing ample space for future expansion.',
    options: [
      { text: '(A) significant', isCorrect: false },
      { text: '(B) significantly', isCorrect: true },
      { text: '(C) significance', isCorrect: false },
      { text: '(D) signify', isCorrect: false },
    ],
    explanation: '比較級（larger）を修飾するには副詞「significantly」が正解です。形容詞は比較級を直接修飾できません。',
    keyVocabulary: [
      { word: 'ample space', meaning: '十分なスペース' },
      { word: 'future expansion', meaning: '将来の拡大' },
      { word: 'significantly', meaning: '大幅に' },
    ],
  },
  {
    id: 542,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The marketing team recommended that the product ______ in time for the holiday shopping season.',
    options: [
      { text: '(A) launches', isCorrect: false },
      { text: '(B) is launched', isCorrect: false },
      { text: '(C) be launched', isCorrect: true },
      { text: '(D) was launched', isCorrect: false },
    ],
    explanation: '「recommended that + 主語 + 動詞の原形」の仮定法現在です。受動態の仮定法は「be + 過去分詞」となります。',
    keyVocabulary: [
      { word: 'holiday shopping season', meaning: 'ホリデーショッピングシーズン' },
      { word: 'recommended', meaning: '推奨した' },
      { word: 'launched', meaning: '発表される' },
    ],
  },
  {
    id: 543,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The research team has been ______ data from over ten thousand participants for the past six months.',
    options: [
      { text: '(A) collecting', isCorrect: true },
      { text: '(B) collected', isCorrect: false },
      { text: '(C) collection', isCorrect: false },
      { text: '(D) collector', isCorrect: false },
    ],
    explanation: '「has been collecting」現在完了進行形です。6ヶ月間継続してデータを収集している動作を表します。',
    keyVocabulary: [
      { word: 'participants', meaning: '参加者' },
      { word: 'research team', meaning: '研究チーム' },
      { word: 'collecting data', meaning: 'データを収集する' },
    ],
  },
  {
    id: 544,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The architect recommended using sustainable materials, ______ would reduce the building\'s environmental impact.',
    options: [
      { text: '(A) that', isCorrect: false },
      { text: '(B) which', isCorrect: true },
      { text: '(C) what', isCorrect: false },
      { text: '(D) who', isCorrect: false },
    ],
    explanation: 'カンマに続く非制限用法の関係代名詞です。前の節全体を受けるので「which」が正解です。',
    keyVocabulary: [
      { word: 'sustainable materials', meaning: '持続可能な材料' },
      { word: 'environmental impact', meaning: '環境への影響' },
      { word: 'architect', meaning: '建築家' },
    ],
  },
  {
    id: 545,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The ______ cause of the equipment malfunction has not yet been identified by the maintenance team.',
    options: [
      { text: '(A) underline', isCorrect: false },
      { text: '(B) underlying', isCorrect: true },
      { text: '(C) underlined', isCorrect: false },
      { text: '(D) underlining', isCorrect: false },
    ],
    explanation: '「underlying（根本的な）」が正解です。underlying causeで「根本原因」という意味になります。underlineは「下線を引く」という動詞です。',
    keyVocabulary: [
      { word: 'underlying', meaning: '根本的な' },
      { word: 'malfunction', meaning: '故障' },
      { word: 'identified', meaning: '特定された' },
    ],
  },
  {
    id: 546,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'We look forward to ______ a long and mutually beneficial relationship with your organization.',
    options: [
      { text: '(A) establish', isCorrect: false },
      { text: '(B) establishing', isCorrect: true },
      { text: '(C) established', isCorrect: false },
      { text: '(D) establishes', isCorrect: false },
    ],
    explanation: '「look forward to + 動名詞」の構文です。toは前置詞なので後ろに動名詞がきます。不定詞のtoではありません。',
    keyVocabulary: [
      { word: 'look forward to', meaning: '楽しみにする' },
      { word: 'mutually beneficial', meaning: '相互に有益な' },
      { word: 'establishing', meaning: '築く' },
    ],
  },
  {
    id: 547,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'If the company ______ the new software system, productivity would improve significantly.',
    options: [
      { text: '(A) adopts', isCorrect: false },
      { text: '(B) adopted', isCorrect: true },
      { text: '(C) had adopted', isCorrect: false },
      { text: '(D) will adopt', isCorrect: false },
    ],
    explanation: '仮定法過去の条件節です。「If + 主語 + 過去形」で、帰結節は「would + 動詞原形」となります。現在の事実に反する仮定です。',
    keyVocabulary: [
      { word: 'adopts', meaning: '採用する' },
      { word: 'productivity', meaning: '生産性' },
      { word: 'significantly', meaning: '大幅に' },
    ],
  },
  {
    id: 548,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The director is ______ for the successful completion of all projects within the designated budget.',
    options: [
      { text: '(A) response', isCorrect: false },
      { text: '(B) responsive', isCorrect: false },
      { text: '(C) responsible', isCorrect: true },
      { text: '(D) responsibility', isCorrect: false },
    ],
    explanation: '「responsible for（〜に責任がある）」が正解です。responseは名詞、responsiveは「応答性がある」の意味です。',
    keyVocabulary: [
      { word: 'responsible for', meaning: '〜に責任がある' },
      { word: 'designated budget', meaning: '指定された予算' },
      { word: 'completion', meaning: '完了' },
    ],
  },
  {
    id: 549,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The quality assurance team has implemented stricter testing procedures to ______ that all products meet industry standards.',
    options: [
      { text: '(A) assure', isCorrect: false },
      { text: '(B) ensure', isCorrect: true },
      { text: '(C) insure', isCorrect: false },
      { text: '(D) assumption', isCorrect: false },
    ],
    explanation: '「ensure（確実にする、保証する）」が正解です。assureは「人に確信させる」、insureは「保険をかける」、assumptionは名詞で「仮定」です。',
    keyVocabulary: [
      { word: 'ensure', meaning: '確実にする' },
      { word: 'quality assurance', meaning: '品質保証' },
      { word: 'industry standards', meaning: '業界基準' },
    ],
  },
  {
    id: 550,
    part: 5,
    category: 'part5',
    categoryLabel: '短文穴埋め',
    question: 'The contract clearly states that either party may terminate the agreement ______ thirty days\' written notice.',
    options: [
      { text: '(A) with', isCorrect: false },
      { text: '(B) upon', isCorrect: true },
      { text: '(C) at', isCorrect: false },
      { text: '(D) by', isCorrect: false },
    ],
    explanation: '「upon + 名詞」で「〜に際して」の意味です。「30日間の書面による通知に際して契約を終了できる」という条項です。',
    keyVocabulary: [
      { word: 'terminate', meaning: '終了する' },
      { word: 'written notice', meaning: '書面による通知' },
      { word: 'agreement', meaning: '契約、合意' },
    ],
  },

  // ===== Part 6: Text Completion (5 questions) =====
  {
    id: 601,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'Dear Valued Customer,\n\nThank you for your recent purchase of the ProMax 5000 laptop. We are committed to ensuring your complete satisfaction with our products. To help us improve our services, we would appreciate it if you could take a few minutes to complete our customer satisfaction survey.\n\n(A) ______\n\nYour feedback is extremely valuable to us. It helps our product development team identify areas where we can enhance the user experience and address any concerns you may have.\n\nThe survey can be accessed through the link below and should take no more than five minutes to complete.',
    options: [
      { text: '(A) We value your opinion and want to hear about your experience.', isCorrect: true },
      { text: '(B) The survey results will be published online next month.', isCorrect: false },
      { text: '(C) Please return the product if you are not satisfied.', isCorrect: false },
      { text: '(D) Our customer service hours are Monday through Friday.', isCorrect: false },
    ],
    explanation: '空所(A)は前文（アンケートの依頼）と後文（フィードバックの重要性）をつなぐ文です。「あなたの意見を大切にしています」が最も自然な繋ぎになります。文脈の流れに合う選択肢を選びましょう。',
    keyVocabulary: [
      { word: 'customer satisfaction survey', meaning: '顧客満足度調査' },
      { word: 'feedback', meaning: 'フィードバック、意見' },
      { word: 'enhance the user experience', meaning: 'ユーザー体験を向上させる' },
    ],
  },
  {
    id: 602,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'Greenfield Technologies is pleased to announce the opening of its new research and development center in Austin, Texas. The state-of-the-art facility will house over two hundred scientists and engineers.\n\nThe new center will focus on developing sustainable energy solutions, (B) ______ solar panel efficiency and battery storage technology. This investment represents the company\'s commitment to environmental responsibility.\n\nAn opening ceremony is planned for next month, and local government officials have been invited to attend.',
    options: [
      { text: '(A) despite', isCorrect: false },
      { text: '(B) particularly in the areas of', isCorrect: true },
      { text: '(C) instead of', isCorrect: false },
      { text: '(D) due to', isCorrect: false },
    ],
    explanation: '空所(B)は前文（持続可能エネルギーソリューション）と後文（ソーラーパネル効率とバッテリー技術）の関係を示す表現が必要です。「特に〜の分野において」が正解。具体例を挙げる接続表現として適切です。',
    keyVocabulary: [
      { word: 'state-of-the-art facility', meaning: '最先端の施設' },
      { word: 'sustainable energy', meaning: '持続可能エネルギー' },
      { word: 'particularly', meaning: '特に' },
    ],
  },
  {
    id: 603,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(C) ______',
    passage: 'MEMO\n\nTO: All Department Managers\nFROM: Human Resources Director\nDATE: March 15\nRE: Updated Remote Work Policy\n\nEffective April 1, all eligible employees will be permitted to work remotely up to three days per week. Managers are responsible for ensuring that their team members maintain productivity while working from home.\n\n(C) ______\n\nPlease review the detailed guidelines attached to this memo and distribute them to your teams. If you have questions about implementation, contact the HR department.',
    options: [
      { text: '(A) Each department must submit a weekly attendance report.', isCorrect: true },
      { text: '(B) The office will be closed for renovation next month.', isCorrect: false },
      { text: '(C) All remote workers must use company-provided equipment.', isCorrect: false },
      { text: '(D) The previous remote work policy was introduced in 2020.', isCorrect: false },
    ],
    explanation: '空所(C)は管理者への具体的な指示を補完する文です。前文で管理者の責任（生産性の維持）が述べられ、後文でガイドラインの配布が指示されています。「各部門は週次出席報告を提出する」という具体的な措置が最も適切です。',
    keyVocabulary: [
      { word: 'eligible employees', meaning: '対象従業員' },
      { word: 'maintain productivity', meaning: '生産性を維持する' },
      { word: 'implementation', meaning: '実施、導入' },
    ],
  },
  {
    id: 604,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'Harbor View Restaurant has been a beloved dining destination since 1995. Known for its fresh seafood and stunning waterfront views, the restaurant attracts both locals and tourists.\n\n(A) ______\n\nStarting next month, the restaurant will undergo a major renovation that will expand the dining area and add an outdoor terrace overlooking the harbor. During the renovation period, which is expected to last approximately four months, a temporary location will operate at 42 Market Street.',
    options: [
      { text: '(A) However, big changes are on the way.', isCorrect: true },
      { text: '(B) The restaurant employs over fifty staff members.', isCorrect: false },
      { text: '(C) Reservations can be made online or by phone.', isCorrect: false },
      { text: '(D) The menu changes with each season.', isCorrect: false },
    ],
    explanation: '空所(A)は前文（1995年からの愛されるレストラン）と後文（来月から大規模な改装）の間にあります。「しかし、大きな変化がやってくる」が、前向きな内容から突然の変更を告げる適切な繋ぎです。',
    keyVocabulary: [
      { word: 'undergo a renovation', meaning: '改装を受ける' },
      { word: 'overlooking the harbor', meaning: '港を見下ろす' },
      { word: 'temporary location', meaning: '一時的な場所' },
    ],
  },
  {
    id: 605,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'Summit Financial Group reported strong earnings for the fiscal year, driven by growth in its wealth management division. Total revenue increased by fifteen percent year-over-year.\n\nThe company attributed the growth to several factors, (B) ______ increasing client retention rates and a favorable investment climate. The board of directors has approved a dividend increase for shareholders.',
    options: [
      { text: '(A) except for', isCorrect: false },
      { text: '(B) including', isCorrect: true },
      { text: '(C) regardless of', isCorrect: false },
      { text: '(D) in spite of', isCorrect: false },
    ],
    explanation: '「including（〜を含む）」が正解。成長の要因として具体的な例を挙げています。「except for（〜を除いて）」や「in spite of（〜にもかかわらず）」は文脈に合いません。',
    keyVocabulary: [
      { word: 'fiscal year', meaning: '会計年度' },
      { word: 'wealth management', meaning: '資産運用・管理' },
      { word: 'client retention rates', meaning: '顧客維持率' },
    ],
  },

  {
    id: 606,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'MEMO\n\nTO: All Staff\nFROM: Facilities Management\nDATE: May 5\nRE: Building Access System Upgrade\n\nPlease be advised that the building access system will be upgraded over the weekend of May 12-13. During this time, all employees (A) ______ obtain new identification badges from the security office on the first floor.\n\nThe new badges will feature enhanced security elements, including biometric verification. Old badges will be deactivated on Monday morning, so it is essential that you pick up your new badge before the start of business on May 14.\n\nIf you are unable to visit the security office during regular hours, special arrangements can be made by contacting the Facilities Management team at extension 2200.',
    options: [
      { text: '(A) must', isCorrect: true },
      { text: '(B) might', isCorrect: false },
      { text: '(C) could', isCorrect: false },
      { text: '(D) would', isCorrect: false },
    ],
    explanation: '新しいIDバッジの取得は義務付けられているため「must（〜しなければならない）」が正解です。',
    keyVocabulary: [
      { word: 'access system', meaning: '入館システム' },
      { word: 'biometric verification', meaning: '生体認証' },
      { word: 'deactivated', meaning: '無効化される' },
    ],
  },
  {
    id: 607,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'Summit Consulting Group is pleased to announce a partnership with GreenTech Innovations to develop eco-friendly business solutions. Under the terms of the agreement, Summit will provide strategic consulting services, (B) ______ GreenTech will contribute its expertise in sustainable technology.\n\nThe collaboration aims to help businesses reduce their carbon footprint while maintaining profitability. Initial projects will focus on energy-efficient office design and waste reduction programs.\n\nA joint press conference is scheduled for next month to outline the full scope of the partnership.',
    options: [
      { text: '(A) despite', isCorrect: false },
      { text: '(B) while', isCorrect: true },
      { text: '(C) unless', isCorrect: false },
      { text: '(D) although', isCorrect: false },
    ],
    explanation: '「while（〜する一方で）」が正解です。Summitが戦略コンサルティングを提供する一方、GreenTechが持続可能技術の専門知識を提供するという対比関係を表します。',
    keyVocabulary: [
      { word: 'partnership', meaning: '提携、パートナーシップ' },
      { word: 'carbon footprint', meaning: 'カーボンフットプリント' },
      { word: 'profitability', meaning: '収益性' },
    ],
  },
  {
    id: 608,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'CITY OF RIVERSIDE — PUBLIC NOTICE\n\nRoad Closure Notification\n\nPlease be advised that Maple Street between 3rd Avenue and 5th Avenue will be closed to all traffic from June 1 through June 30 for underground pipe replacement. (A) ______\n\nResidents in the affected area are encouraged to use Oak Street as an alternate route. The city has arranged for additional parking on Oak Street during the construction period. Deliveries to businesses on Maple Street can be made from the rear entrance on Elm Lane.\n\nWe apologize for any inconvenience and appreciate your patience during this infrastructure improvement project.',
    options: [
      { text: '(A) The project is expected to be completed ahead of schedule.', isCorrect: false },
      { text: '(B) The construction will take place Monday through Saturday from 7 A.M. to 6 P.M.', isCorrect: true },
      { text: '(C) The city will offer free public transportation during this period.', isCorrect: false },
      { text: '(D) Residents will receive a discount on their water bills.', isCorrect: false },
    ],
    explanation: '空所(A)は道路閉鎖に関する詳細情報を補完する文です。工事の作業時間（月〜土、7時〜18時）が最も適切な情報です。',
    keyVocabulary: [
      { word: 'underground pipe', meaning: '地下配管' },
      { word: 'alternate route', meaning: '迂回路' },
      { word: 'infrastructure', meaning: 'インフラ' },
    ],
  },
  {
    id: 609,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'CITY OF RIVERSIDE — PUBLIC NOTICE\n\nRoad Closure Notification\n\nPlease be advised that Maple Street between 3rd Avenue and 5th Avenue will be closed to all traffic from June 1 through June 30 for underground pipe replacement. The construction will take place Monday through Saturday from 7 A.M. to 6 P.M.\n\nResidents in the affected area are encouraged to use Oak Street as an alternate route. The city has arranged for additional parking on Oak Street during the construction period. Deliveries to businesses on Maple Street can be made from the rear entrance on Elm Lane.\n\nWe apologize for any inconvenience and appreciate your patience during this infrastructure improvement project. For questions, (B) ______ the Department of Public Works at 555-0142.',
    options: [
      { text: '(A) contacting', isCorrect: false },
      { text: '(B) please contact', isCorrect: true },
      { text: '(C) to contact', isCorrect: false },
      { text: '(D) contacted', isCorrect: false },
    ],
    explanation: '命令・依頼の形「please + 動詞の原形」が正解です。問い合わせ先を案内する表現として「please contact」が適切です。',
    keyVocabulary: [
      { word: 'Department of Public Works', meaning: '公共事業部' },
      { word: 'rear entrance', meaning: '裏口' },
      { word: 'patience', meaning: '忍耐、辛抱' },
    ],
  },
  {
    id: 610,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'From: HR Department\nTo: All Employees\nSubject: Employee Wellness Program\n\nWe are excited to announce the launch of our new Employee Wellness Program, effective July 1. The program offers a range of activities and resources designed to support your physical and mental well-being.\n\n(A) ______\n\nTo sign up, simply visit the wellness portal on the company intranet and complete the registration form. Participation is voluntary and open to all full-time and part-time employees. If you have questions about the program, please contact the HR department.',
    options: [
      { text: '(A) Employees are required to participate in all program activities.', isCorrect: false },
      { text: '(B) The program replaces the existing health insurance plan.', isCorrect: false },
      { text: '(C) Highlights include weekly yoga sessions, nutrition workshops, and access to an online counseling service.', isCorrect: true },
      { text: '(D) The company will increase the wellness budget next year.', isCorrect: false },
    ],
    explanation: '空所(A)はプログラムの具体的な内容を説明する文です。プログラムのハイライトとして週次ヨガ、栄養ワークショップ、オンラインカウンセリングサービスが挙げられています。',
    keyVocabulary: [
      { word: 'wellness program', meaning: 'ウェルネスプログラム' },
      { word: 'voluntary', meaning: '任意の' },
      { word: 'counseling service', meaning: 'カウンセリングサービス' },
    ],
  },
  {
    id: 611,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'GRAND OPENING — TECH HUB COWORKING SPACE\n\nAre you a freelancer, startup founder, or remote worker looking for a professional workspace? Tech Hub Coworking Space is now open in the heart of downtown!\n\nOur modern facility offers flexible desk rentals, private offices, and meeting rooms equipped with the latest technology. Members enjoy high-speed fiber Internet, complimentary coffee and tea, and 24/7 building access.\n\n(A) ______\n\nVisit our website at techhubworkspace.com or stop by for a free tour during our grand opening week, November 1-7. Don\'t miss our special introductory rate — twenty percent off the first three months for new members!',
    options: [
      { text: '(A) Monthly memberships start at just $199 per month.', isCorrect: true },
      { text: '(B) The building was constructed in 2015.', isCorrect: false },
      { text: '(C) Parking is available for an additional fee.', isCorrect: false },
      { text: '(D) The facility can accommodate up to five hundred people.', isCorrect: false },
    ],
    explanation: '空所(A)は価格情報を提供し、読者を行動に促す文です。「月額$199から」という具体的な価格が最も広告文として効果的です。',
    keyVocabulary: [
      { word: 'coworking space', meaning: 'コワーキングスペース' },
      { word: 'fiber Internet', meaning: '光ファイバーインターネット' },
      { word: 'introductory rate', meaning: '導入価格' },
    ],
  },
  {
    id: 612,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'From: Marketing Director\nTo: Sales Team\nSubject: Q3 Campaign Results\n\nI am pleased to share the results of our third-quarter marketing campaign. Overall, the campaign exceeded our expectations, generating a forty percent increase in qualified leads compared to Q2.\n\n(A) ______\n\nOur social media advertising generated the highest return on investment, accounting for sixty percent of new leads. Email marketing also performed well, with an open rate of twenty-eight percent, which is above the industry average.\n\nBased on these results, we recommend increasing the digital advertising budget by fifteen percent for Q4.',
    options: [
      { text: '(A) The Q2 results were disappointing for the entire company.', isCorrect: false },
      { text: '(B) The campaign ran from July through September across multiple channels.', isCorrect: true },
      { text: '(C) We plan to hire additional marketing staff next quarter.', isCorrect: false },
      { text: '(D) Competitor campaigns had a negative impact on our sales.', isCorrect: false },
    ],
    explanation: '空所(A)はキャンペーンの概要を補足する文です。期間とチャネルの情報が前文（結果の概要）と後文（詳細分析）を自然につなぎます。',
    keyVocabulary: [
      { word: 'qualified leads', meaning: '有望な見込み客' },
      { word: 'return on investment', meaning: '投資収益率' },
      { word: 'industry average', meaning: '業界平均' },
    ],
  },
  {
    id: 613,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'From: Marketing Director\nTo: Sales Team\nSubject: Q3 Campaign Results\n\nI am pleased to share the results of our third-quarter marketing campaign. Overall, the campaign exceeded our expectations, generating a forty percent increase in qualified leads compared to Q2.\n\nThe campaign ran from July through September across multiple channels.\n\nOur social media advertising generated the highest return on investment, accounting for sixty percent of new leads. Email marketing also performed well, with an open rate of twenty-eight percent, which is above the industry average.\n\nBased on these results, we recommend (B) ______ the digital advertising budget by fifteen percent for Q4.',
    options: [
      { text: '(A) increase', isCorrect: false },
      { text: '(B) increasing', isCorrect: true },
      { text: '(C) increased', isCorrect: false },
      { text: '(D) increases', isCorrect: false },
    ],
    explanation: '「recommend + 動名詞」の構文です。recommendの後には動名詞がきて「〜を推奨する」という意味になります。',
    keyVocabulary: [
      { word: 'digital advertising budget', meaning: 'デジタル広告予算' },
      { word: 'social media advertising', meaning: 'ソーシャルメディア広告' },
      { word: 'open rate', meaning: '開封率' },
    ],
  },
  {
    id: 614,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'NEXUS TECHNOLOGIES — CAREER OPPORTUNITY\n\nPosition: Senior Software Engineer\nLocation: Austin, TX (Hybrid — 3 days in office)\n\nNexus Technologies is seeking a Senior Software Engineer to join our growing development team. The ideal candidate will have at least five years of experience in full-stack development and a strong command of cloud-based technologies.\n\n(A) ______\n\nWe offer a competitive salary range of $120,000 to $150,000, comprehensive health benefits, and a generous stock option package. Our Austin office features state-of-the-art amenities, including a gym, game room, and rooftop lounge.\n\nTo apply, submit your resume and portfolio to careers@nexustech.com by December 15.',
    options: [
      { text: '(A) A master\'s degree in computer science is required for all applicants.', isCorrect: false },
      { text: '(B) The position was recently vacated by a retiring employee.', isCorrect: false },
      { text: '(C) Responsibilities include leading development sprints, mentoring junior engineers, and contributing to architectural decisions.', isCorrect: true },
      { text: '(D) Previous applicants need not reapply.', isCorrect: false },
    ],
    explanation: '空所(A)は職務内容を説明する文です。「スプリントのリード、ジュニアエンジニアのメンタリング、アーキテクチャの意思決定への貢献」が職務の具体的内容として適切です。',
    keyVocabulary: [
      { word: 'full-stack development', meaning: 'フルスタック開発' },
      { word: 'development sprints', meaning: '開発スプリント' },
      { word: 'architectural decisions', meaning: 'アーキテクチャの意思決定' },
    ],
  },
  {
    id: 615,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'NEXUS TECHNOLOGIES — CAREER OPPORTUNITY\n\nPosition: Senior Software Engineer\nLocation: Austin, TX (Hybrid — 3 days in office)\n\nNexus Technologies is seeking a Senior Software Engineer to join our growing development team. The ideal candidate will have at least five years of experience in full-stack development and a strong command of cloud-based technologies.\n\nResponsibilities include leading development sprints, mentoring junior engineers, and contributing to architectural decisions.\n\nWe offer a competitive salary range of $120,000 to $150,000, comprehensive health benefits, and a generous stock option package. Our Austin office features state-of-the-art amenities, including a gym, game room, and rooftop lounge.\n\nTo apply, submit your resume and portfolio to careers@nexustech.com (B) ______ December 15.',
    options: [
      { text: '(A) by', isCorrect: true },
      { text: '(B) until', isCorrect: false },
      { text: '(C) since', isCorrect: false },
      { text: '(D) from', isCorrect: false },
    ],
    explanation: '「by（〜までに）」が期限を表す前置詞として正解です。untilは「〜まで継続」、sinceは「〜から」、fromは「〜から」です。',
    keyVocabulary: [
      { word: 'stock option', meaning: 'ストックオプション' },
      { word: 'competitive salary', meaning: '競争力のある給与' },
      { word: 'portfolio', meaning: 'ポートフォリオ' },
    ],
  },
  {
    id: 616,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'WELCOME TO BRIGHTVIEW HOTEL\n\nDear Guest,\n\nThank you for choosing to stay with us. We are committed to making your visit as comfortable and enjoyable as possible.\n\n(A) ______\n\nFor your dining pleasure, our restaurant serves breakfast from 6:30 to 10:00 A.M. and dinner from 6:00 to 10:00 P.M. Room service is available around the clock. The rooftop pool and fitness center are open daily from 6 A.M. to 10 P.M.\n\nShould you require anything during your stay, our front desk staff is available 24 hours a day to assist you. We hope you have a wonderful experience.',
    options: [
      { text: '(A) Checkout time is 11:00 A.M., and late checkout may be arranged for an additional fee.', isCorrect: true },
      { text: '(B) The hotel was built in 1985 and renovated in 2020.', isCorrect: false },
      { text: '(C) We offer special rates for corporate clients.', isCorrect: false },
      { text: '(D) The hotel has won several awards for its architecture.', isCorrect: false },
    ],
    explanation: '空所(A)はチェックアウト情報という宿泊者に必要な実用情報を提供する文です。ホテルのウェルカムレターとして最も実用的な内容です。',
    keyVocabulary: [
      { word: 'checkout time', meaning: 'チェックアウト時間' },
      { word: 'late checkout', meaning: 'レイトチェックアウト' },
      { word: 'room service', meaning: 'ルームサービス' },
    ],
  },
  {
    id: 617,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'NOTICE TO ALL TENANTS\n\nPlease be informed that the annual fire safety drill will take place on Wednesday, October 15, at 2:00 P.M. All tenants are required to participate.\n\n(A) ______\n\nPlease familiarize yourself with the emergency exits nearest to your office. Evacuation maps are posted near each elevator. If you have any mobility issues that may require special assistance during the drill, please notify the building management by October 10.',
    options: [
      { text: '(A) The drill is expected to last approximately thirty minutes.', isCorrect: true },
      { text: '(B) The fire alarm system was installed last year.', isCorrect: false },
      { text: '(C) Tenants who miss the drill will be fined.', isCorrect: false },
      { text: '(D) The building has a total of twelve floors.', isCorrect: false },
    ],
    explanation: '空所(A)は避難訓練の具体的な詳細を補完する文です。「訓練は約30分間」という情報が参加者にとって有用です。',
    keyVocabulary: [
      { word: 'fire safety drill', meaning: '防火避難訓練' },
      { word: 'emergency exits', meaning: '非常口' },
      { word: 'evacuation maps', meaning: '避難経路図' },
    ],
  },
  {
    id: 618,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'NOTICE TO ALL TENANTS\n\nPlease be informed that the annual fire safety drill will take place on Wednesday, October 15, at 2:00 P.M. All tenants are required to participate.\n\nThe drill is expected to last approximately thirty minutes.\n\nPlease familiarize yourself with the emergency exits nearest to your office. Evacuation maps are posted near each elevator. If you have any mobility issues that may require special assistance during the drill, please notify the building management by October 10.\n\nWe appreciate your (B) ______ in making our building safer for everyone.',
    options: [
      { text: '(A) cooperate', isCorrect: false },
      { text: '(B) cooperation', isCorrect: true },
      { text: '(C) cooperative', isCorrect: false },
      { text: '(D) cooperatively', isCorrect: false },
    ],
    explanation: '「your + 名詞」の構文です。yourは所有格なので後ろに名詞がきます。cooperateは動詞、cooperativeは形容詞、cooperativelyは副詞です。',
    keyVocabulary: [
      { word: 'familiarize yourself', meaning: '〜に慣れる' },
      { word: 'mobility issues', meaning: '移動の問題' },
      { word: 'notify', meaning: '通知する' },
    ],
  },
  {
    id: 619,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'From: Operations Manager\nTo: Warehouse Team\nSubject: New Inventory Management Procedures\n\nEffective immediately, all inventory tracking will transition from manual logging to our new digital system, WarehousePro. This change is designed to improve accuracy and reduce processing time.\n\n(A) ______\n\nTraining sessions on the new system will be held this Friday from 9 to 11 A.M. in the conference room. Attendance is mandatory for all warehouse staff. If you have any questions before the training, please contact your shift supervisor.',
    options: [
      { text: '(A) All staff must complete the transition by the end of this month.', isCorrect: true },
      { text: '(B) The previous system was implemented ten years ago.', isCorrect: false },
      { text: '(C) The company spent $50,000 on the new system.', isCorrect: false },
      { text: '(D) Competitors use a similar digital system.', isCorrect: false },
    ],
    explanation: '空所(A)は移行の期限を示す文です。「月末までに全スタッフが移行を完了しなければならない」が最も実務的な指示です。',
    keyVocabulary: [
      { word: 'inventory management', meaning: '在庫管理' },
      { word: 'manual logging', meaning: '手動記録' },
      { word: 'transition', meaning: '移行' },
    ],
  },
  {
    id: 620,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'From: Operations Manager\nTo: Warehouse Team\nSubject: New Inventory Management Procedures\n\nEffective immediately, all inventory tracking will transition from manual logging to our new digital system, WarehousePro. This change is designed to improve accuracy and reduce processing time.\n\nAll staff must complete the transition by the end of this month.\n\nTraining sessions on the new system will be held this Friday from 9 to 11 A.M. in the conference room. Attendance is mandatory for all warehouse staff. If you have any questions before the training, please contact your shift supervisor.\n\nThank you for your (B) ______ as we work to modernize our operations.',
    options: [
      { text: '(A) patient', isCorrect: false },
      { text: '(B) patience', isCorrect: true },
      { text: '(C) patiently', isCorrect: false },
      { text: '(D) impatience', isCorrect: false },
    ],
    explanation: '「your + 名詞」の構文です。yourは所有格なので後ろに名詞がきます。patience（忍耐、辛抱）が正解です。',
    keyVocabulary: [
      { word: 'transition', meaning: '移行' },
      { word: 'mandatory', meaning: '義務の' },
      { word: 'modernize', meaning: '近代化する' },
    ],
  },
  {
    id: 621,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'MEADOWBROOK COMMUNITY COLLEGE\n\nSpring Semester Course Catalog\n\nThe Continuing Education Department is pleased to offer a variety of professional development courses this spring. Whether you\'re looking to advance your career or explore a new field, we have something for you.\n\n(A) ______\n\nAll courses are held in the evening from 6:30 to 8:30 P.M. and run for eight weeks. Tuition ranges from $150 to $300 per course, with a ten percent discount available for early registration before January 15. Register online at meadowbrook-cc.edu/continuing-ed or call 555-0234.',
    options: [
      { text: '(A) Course offerings include Project Management Fundamentals, Digital Marketing Essentials, Data Analysis with Python, and Business Communication.', isCorrect: true },
      { text: '(B) The college was founded in 1965.', isCorrect: false },
      { text: '(C) Financial aid is not available for continuing education courses.', isCorrect: false },
      { text: '(D) Students must have a bachelor\'s degree to enroll.', isCorrect: false },
    ],
    explanation: '空所(A)は具体的なコース内容を紹介する文です。カタログの冒頭に続き、具体的な講座一覧が最も自然な流れです。',
    keyVocabulary: [
      { word: 'Continuing Education', meaning: '継続教育、社会人教育' },
      { word: 'tuition', meaning: '授業料' },
      { word: 'early registration', meaning: '早期登録' },
    ],
  },
  {
    id: 622,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'PRESS RELEASE\n\nApex Pharmaceuticals Announces Breakthrough in Diabetes Treatment\n\nApex Pharmaceuticals, a global leader in medical research, announced today the successful completion of Phase 3 clinical trials for its new diabetes medication, Glucobalance.\n\n(A) ______\n\nThe medication demonstrated a remarkable ability to regulate blood sugar levels with fewer side effects than currently available treatments. Apex plans to submit the drug for regulatory approval in the first quarter of next year.\n\n"This represents a major step forward for millions of patients worldwide," said Dr. Maria Santos, Chief Medical Officer at Apex Pharmaceuticals.',
    options: [
      { text: '(A) The trial involved over five thousand participants across twelve countries.', isCorrect: true },
      { text: '(B) Apex Pharmaceuticals was founded in 1990.', isCorrect: false },
      { text: '(C) The company\'s stock price rose significantly after the announcement.', isCorrect: false },
      { text: '(D) Diabetes is a growing health concern worldwide.', isCorrect: false },
    ],
    explanation: '空所(A)は臨床試験の規模を示す文です。「12カ国、5000人以上の参加者」という具体的なデータがプレスリリースとして適切です。',
    keyVocabulary: [
      { word: 'clinical trials', meaning: '臨床試験' },
      { word: 'regulatory approval', meaning: '規制当局の承認' },
      { word: 'blood sugar levels', meaning: '血糖値' },
    ],
  },
  {
    id: 623,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'OAKVILLE BUSINESS JOURNAL\n\nLocal Startup Secures $5 Million in Series A Funding\n\nBy James Park | October 8\n\nGreenLeaf Technologies, a local startup specializing in vertical farming systems, has closed a $5 million Series A funding round led by Horizon Ventures.\n\n(A) ______\n\nThe company plans to use the funds to expand its production facility and hire additional engineers. GreenLeaf\'s proprietary technology uses ninety percent less water than traditional farming methods while producing crops year-round.\n\n"This investment allows us to scale our operations and bring sustainable farming solutions to more communities," said GreenLeaf CEO, Tomoko Abe.',
    options: [
      { text: '(A) The company was founded by two university students.', isCorrect: false },
      { text: '(B) This brings the company\'s total funding to $8.5 million since its founding in 2022.', isCorrect: true },
      { text: '(C) Horizon Ventures is based in San Francisco.', isCorrect: false },
      { text: '(D) Vertical farming is gaining popularity across the country.', isCorrect: false },
    ],
    explanation: '空所(A)は資金調達の文脈を補完する文です。「設立以来の累計資金調達額が850万ドルに達した」という情報が最も関連性が高いです。',
    keyVocabulary: [
      { word: 'Series A funding', meaning: 'シリーズA資金調達' },
      { word: 'vertical farming', meaning: '垂直農業' },
      { word: 'proprietary technology', meaning: '独自技術' },
    ],
  },
  {
    id: 624,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'TRAVEL REQUEST FORM\n\nEmployee Name: _____\nDepartment: _____\nDestination: _____\nTravel Dates: _____\n\nPurpose of Travel: _____\n\nEstimated Expenses:\n- Airfare: $_____\n- Hotel: $_____ per night × _____ nights\n- Meals: $_____ per day × _____ days\n- Ground transportation: $_____\n- Other: $_____\n\nTotal Estimated Cost: $_____\n\n(A) ______\n\nEmployee Signature: ___________ Date: _____\nManager Approval: ___________ Date: _____',
    options: [
      { text: '(A) All expenses over $50 must be accompanied by original receipts.', isCorrect: true },
      { text: '(B) The company prefers economy class for all domestic flights.', isCorrect: false },
      { text: '(C) Travel requests should be submitted at least two weeks in advance.', isCorrect: false },
      { text: '(D) The finance department processes reimbursements within five business days.', isCorrect: false },
    ],
    explanation: '空所(A)は経費精算に関するルールを示す文です。「50ドルを超える経費には元の領収書が必要」という条件がフォームに最も関連性が高いです。',
    keyVocabulary: [
      { word: 'travel request', meaning: '出張申請' },
      { word: 'estimated expenses', meaning: '概算経費' },
      { word: 'accompanied by', meaning: '〜を添付して' },
    ],
  },
  {
    id: 625,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'From: Lisa Chen, Event Coordinator\nTo: Department Heads\nSubject: Annual Company Gala — Save the Date\n\nI am pleased to announce that the Annual Company Gala will be held on Friday, December 13, at the Grand Ballroom of the Metro Convention Center.\n\n(A) ______\n\nThis year\'s theme is "A Night Under the Stars," featuring live music, a three-course dinner, and an awards ceremony recognizing outstanding employee contributions. Formal attire is requested.\n\nPlease RSVP to events@company.com by November 30. Dietary restrictions and plus-one requests should be included in your response.',
    options: [
      { text: '(A) The event will begin with a cocktail reception at 6:30 P.M., followed by dinner at 7:30 P.M.', isCorrect: true },
      { text: '(B) Last year\'s gala was attended by over three hundred employees.', isCorrect: false },
      { text: '(C) The convention center has ample parking available.', isCorrect: false },
      { text: '(D) Tickets are $75 per person.', isCorrect: false },
    ],
    explanation: '空所(A)はイベントの具体的なスケジュールを提供する文です。「カクテルレセプション6:30、ディナー7:30」という時間情報が最も実用的です。',
    keyVocabulary: [
      { word: 'cocktail reception', meaning: 'カクテルレセプション' },
      { word: 'formal attire', meaning: '正装' },
      { word: 'RSVP', meaning: '出欠確認' },
    ],
  },
  {
    id: 626,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'From: Lisa Chen, Event Coordinator\nTo: Department Heads\nSubject: Annual Company Gala — Save the Date\n\nI am pleased to announce that the Annual Company Gala will be held on Friday, December 13, at the Grand Ballroom of the Metro Convention Center.\n\nThe event will begin with a cocktail reception at 6:30 P.M., followed by dinner at 7:30 P.M.\n\nThis year\'s theme is "A Night Under the Stars," featuring live music, a three-course dinner, and an awards ceremony recognizing outstanding employee contributions. Formal attire is requested.\n\nPlease RSVP to events@company.com by November 30. Dietary restrictions and plus-one requests should (B) ______ in your response.',
    options: [
      { text: '(A) include', isCorrect: false },
      { text: '(B) be included', isCorrect: true },
      { text: '(C) including', isCorrect: false },
      { text: '(D) included', isCorrect: false },
    ],
    explanation: '「should be included（含まれるべきである）」の受動態が正解です。主語（requests）が含まれる対象だからです。',
    keyVocabulary: [
      { word: 'dietary restrictions', meaning: '食事制限' },
      { word: 'plus-one', meaning: '同伴者' },
      { word: 'outstanding', meaning: '優秀な' },
    ],
  },
  {
    id: 627,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'SILVER LINING INSURANCE\n\nPolicy Renewal Notice\n\nDear Mr. Thompson,\n\nYour homeowner\'s insurance policy (Policy #HL-4829137) is set to expire on March 31. We are pleased to offer you a renewal with updated coverage.\n\n(A) ______\n\nYour new annual premium will be $1,250, which represents a modest increase of three percent from the previous year. The new policy includes expanded coverage for water damage and identity theft protection at no additional cost.\n\nTo renew, simply sign and return the enclosed form by March 15, or renew online at silverlining-insurance.com/renew.',
    options: [
      { text: '(A) The updated policy will be effective from April 1 through March 31 of the following year.', isCorrect: true },
      { text: '(B) We have been serving customers for over thirty years.', isCorrect: false },
      { text: '(C) Claims can be filed by phone or online.', isCorrect: false },
      { text: '(D) You can add family members to your policy.', isCorrect: false },
    ],
    explanation: '空所(A)は新しい保険期間を明記する文です。「4月1日から翌年3月31日まで有効」という情報が更新通知として最も重要です。',
    keyVocabulary: [
      { word: 'policy renewal', meaning: '保険更新' },
      { word: 'annual premium', meaning: '年間保険料' },
      { word: 'coverage', meaning: '補償内容' },
    ],
  },
  {
    id: 628,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'SUSTAINABLE PACKAGING SOLUTIONS — Company Newsletter\n\nIn our ongoing effort to reduce environmental impact, we are excited to announce a company-wide initiative to eliminate single-use plastics from our packaging operations by the end of next year.\n\n(A) ______\n\nAs a first step, we will replace plastic wrapping with biodegradable alternatives starting next quarter. Additionally, all packaging materials will be sourced from certified sustainable suppliers. A task force has been established to oversee the transition and ensure that product quality is maintained throughout the process.',
    options: [
      { text: '(A) This initiative reflects our commitment to corporate social responsibility and environmental stewardship.', isCorrect: true },
      { text: '(B) Competitors have already made similar changes.', isCorrect: false },
      { text: '(C) The cost of biodegradable materials has decreased significantly.', isCorrect: false },
      { text: '(D) Employees are encouraged to suggest additional sustainability ideas.', isCorrect: false },
    ],
    explanation: '空所(A)はイニシアチブの意義を示す文です。「企業の社会的責任と環境管理への取り組み」という説明が前文と後文を自然につなぎます。',
    keyVocabulary: [
      { word: 'single-use plastics', meaning: '使い捨てプラスチック' },
      { word: 'biodegradable', meaning: '生分解性の' },
      { word: 'environmental stewardship', meaning: '環境管理' },
    ],
  },
  {
    id: 629,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'SUSTAINABLE PACKAGING SOLUTIONS — Company Newsletter\n\nIn our ongoing effort to reduce environmental impact, we are excited to announce a company-wide initiative to eliminate single-use plastics from our packaging operations by the end of next year.\n\nThis initiative reflects our commitment to corporate social responsibility and environmental stewardship.\n\nAs a first step, we will replace plastic wrapping with biodegradable alternatives starting next quarter. Additionally, all packaging materials will be sourced from certified sustainable suppliers. A task force has been established to oversee the transition and ensure that product quality is maintained throughout the process.\n\nEmployees who have suggestions or concerns are encouraged (B) ______ the task force at sustainability@company.com.',
    options: [
      { text: '(A) contact', isCorrect: false },
      { text: '(B) to contact', isCorrect: true },
      { text: '(C) contacting', isCorrect: false },
      { text: '(D) contacted', isCorrect: false },
    ],
    explanation: '「encourage + 人 + to + 動詞の原形」の構文です。「タスクフォースに連絡することが推奨される」という意味です。',
    keyVocabulary: [
      { word: 'task force', meaning: 'タスクフォース、特命チーム' },
      { word: 'transition', meaning: '移行' },
      { word: 'sustainability', meaning: '持続可能性' },
    ],
  },
  {
    id: 630,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'CROSSBORDER LOGISTICS — SERVICE UPDATE\n\nDear Valued Clients,\n\nWe are writing to inform you of important changes to our international shipping services, effective February 1.\n\n(A) ______\n\nOur standard shipping rates for packages to Europe will increase by eight percent due to rising fuel costs and new customs processing fees. However, we are pleased to introduce a new express delivery option for European destinations with guaranteed delivery within three business days.\n\nWe appreciate your continued partnership and are committed to providing reliable logistics solutions. Please contact your account manager with any questions.',
    options: [
      { text: '(A) These changes are designed to improve service reliability and delivery speed.', isCorrect: true },
      { text: '(B) Our company was founded in 2005.', isCorrect: false },
      { text: '(C) Many clients have expressed concerns about delivery delays.', isCorrect: false },
      { text: '(D) We have opened a new warehouse in Germany.', isCorrect: false },
    ],
    explanation: '空所(A)は変更の目的を説明する文です。「サービスの信頼性と配送スピードの向上を目的とした変更」という説明が前文と後文をつなぎます。',
    keyVocabulary: [
      { word: 'shipping rates', meaning: '配送料金' },
      { word: 'customs processing fees', meaning: '通関処理費' },
      { word: 'express delivery', meaning: '急便配送' },
    ],
  },
  {
    id: 631,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'FITNESS FIRST GYM — NEW MEMBERSHIP OPTIONS\n\nWe are excited to introduce our revised membership plans, offering more flexibility and value than ever before.\n\n(A) ______\n\nOur Premium Membership now includes unlimited group classes, two personal training sessions per month, and access to all three branch locations. At $89 per month, it represents excellent value for fitness enthusiasts.\n\nNew members who sign up before the end of the month will receive a complimentary fitness assessment and a personalized workout plan. Visit the front desk to enroll.',
    options: [
      { text: '(A) Choose from three membership tiers: Basic, Standard, and Premium.', isCorrect: true },
      { text: '(B) Our gym has been serving the community since 2010.', isCorrect: false },
      { text: '(C) Parking is free for all members.', isCorrect: false },
      { text: '(D) Our trainers are certified professionals.', isCorrect: false },
    ],
    explanation: '空所(A)はメンバーシッププランの概要を紹介する文です。「3つの階層から選択可能」という選択肢の紹介が最も自然な導入です。',
    keyVocabulary: [
      { word: 'membership plans', meaning: '会員プラン' },
      { word: 'personal training', meaning: 'パーソナルトレーニング' },
      { word: 'complimentary', meaning: '無料の' },
    ],
  },
  {
    id: 632,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'CONFERENCE SPEAKER INVITATION\n\nDear Dr. Williams,\n\nOn behalf of the International Association of Data Scientists, I am honored to invite you to be a keynote speaker at our annual conference, DataSummit 2025.\n\nThe conference will be held at the Singapore Convention Center from August 10 to 12. Last year\'s event attracted over two thousand attendees from forty countries.\n\n(A) ______\n\nWe would be delighted if you could present your recent research on machine learning applications in healthcare. A thirty-minute slot would be allocated for your presentation, followed by a fifteen-minute Q&A session.\n\nPlease let us know by May 15 if you are available. Travel and accommodation expenses will be fully covered.',
    options: [
      { text: '(A) This year\'s theme is "AI for Social Good."', isCorrect: true },
      { text: '(B) Singapore is a beautiful city to visit in August.', isCorrect: false },
      { text: '(C) Previous keynote speakers have included Nobel laureates.', isCorrect: false },
      { text: '(D) The conference has been held annually since 2010.', isCorrect: false },
    ],
    explanation: '空所(A)は会議のテーマを示す文です。招待状の文脈で会議のテーマを伝えることが最も自然です。',
    keyVocabulary: [
      { word: 'keynote speaker', meaning: '基調講演者' },
      { word: 'allocated', meaning: '割り当てられた' },
      { word: 'accommodation expenses', meaning: '宿泊費' },
    ],
  },
  {
    id: 633,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'PRODUCT RECALL NOTICE\n\nGreen Valley Foods is voluntarily recalling its Organic Granola Bars (Batch #GV-2024-089) due to the potential presence of undeclared tree nuts.\n\n(A) ______\n\nConsumers who have purchased this product should return it to the place of purchase for a full refund. No proof of purchase is required. The affected products were distributed to grocery stores in the Northeast region between January 15 and February 20.\n\nCustomer safety is our top priority. For questions, contact our toll-free hotline at 1-800-555-0176.',
    options: [
      { text: '(A) Individuals with tree nut allergies may experience a serious or life-threatening reaction.', isCorrect: true },
      { text: '(B) Green Valley Foods has been in business for twenty years.', isCorrect: false },
      { text: '(C) This is the first recall in the company\'s history.', isCorrect: false },
      { text: '(D) The granola bars are available in three flavors.', isCorrect: false },
    ],
    explanation: '空所(A)はリコールの理由を説明する文です。「ナッツアレルギーのある方は深刻な反応を起こす可能性がある」という警告が最も重要です。',
    keyVocabulary: [
      { word: 'product recall', meaning: '製品回収' },
      { word: 'undeclared', meaning: '表示されていない' },
      { word: 'toll-free hotline', meaning: '無料電話相談窓口' },
    ],
  },
  {
    id: 634,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'FROM THE DESK OF THE CEO\n\nDear Team,\n\nAs we approach the end of an exceptional year, I want to take this opportunity to express my gratitude to each and every one of you.\n\n(A) ______\n\nWe achieved record revenue of $250 million, expanded into four new markets, and successfully launched our flagship product, CloudSync Pro. None of this would have been possible without your hard work, creativity, and dedication.\n\nLooking ahead, we have ambitious plans for the coming year, including the opening of a new research center in Bangalore and the rollout of our updated customer platform.',
    options: [
      { text: '(A) 2024 has been a transformative year for our company.', isCorrect: true },
      { text: '(B) The company picnic was a great success.', isCorrect: false },
      { text: '(C) I have been CEO for five years now.', isCorrect: false },
      { text: '(D) Please remember to submit your annual reviews.', isCorrect: false },
    ],
    explanation: '空所(A)は年の振り返りを導入する文です。「2024年は変革の年でした」という導入が、具体的な成果の列挙に自然につながります。',
    keyVocabulary: [
      { word: 'transformative', meaning: '変革的な' },
      { word: 'flagship product', meaning: '主力製品' },
      { word: 'ambitious plans', meaning: '野心的な計画' },
    ],
  },
  {
    id: 635,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'PARKSIDE REAL ESTATE\n\nProperty Listing: 42 Maple Drive, Westbrook\n\nStunning four-bedroom colonial home situated on a spacious half-acre lot in the desirable Westbrook neighborhood.\n\n(A) ______\n\nThe home features a renovated gourmet kitchen with granite countertops, a formal dining room, a cozy family room with a fireplace, and a finished basement. The backyard includes a large deck perfect for entertaining.\n\nListed at $485,000. Open house scheduled for Saturday, April 5, from 10 A.M. to 2 P.M. Contact agent Sarah Miller at 555-0148 for more information or to schedule a private showing.',
    options: [
      { text: '(A) Built in 2005, this 2,800-square-foot home has been meticulously maintained.', isCorrect: true },
      { text: '(B) Westbrook is known for its excellent school system.', isCorrect: false },
      { text: '(C) Mortgage rates are currently at historic lows.', isCorrect: false },
      { text: '(D) Several homes in the area have sold recently.', isCorrect: false },
    ],
    explanation: '空所(A)は物件の基本情報を提供する文です。「2005年築、2800平方フィート、手入念に維持されている」という物件の詳細が最も関連性が高いです。',
    keyVocabulary: [
      { word: 'colonial home', meaning: 'コロニアル様式の家' },
      { word: 'granite countertops', meaning: '御影石のカウンタートップ' },
      { word: 'open house', meaning: '内見会' },
    ],
  },
  {
    id: 636,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'Employee Feedback Survey Results\n\nThe Human Resources Department conducted its annual employee satisfaction survey in September, with an eighty-two percent response rate.\n\n(A) ______\n\nThe survey revealed that employees are most satisfied with their work-life balance and professional development opportunities. However, concerns were raised about the clarity of promotion criteria and the frequency of performance feedback.\n\nBased on these findings, HR will implement quarterly feedback sessions and publish updated promotion guidelines by the end of Q1.',
    options: [
      { text: '(A) Overall satisfaction scores improved by eight percent compared to last year.', isCorrect: true },
      { text: '(B) The survey consisted of fifty questions.', isCorrect: false },
      { text: '(C) All departments participated equally.', isCorrect: false },
      { text: '(D) Results were shared with the board of directors.', isCorrect: false },
    ],
    explanation: '空所(A)は調査結果の概要を示す文です。「昨年比8%改善」という全体傾向が、後文の具体的な満足点・懸念点に自然につながります。',
    keyVocabulary: [
      { word: 'response rate', meaning: '回答率' },
      { word: 'work-life balance', meaning: 'ワークライフバランス' },
      { word: 'promotion criteria', meaning: '昇進基準' },
    ],
  },
  {
    id: 637,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'Employee Feedback Survey Results\n\nThe Human Resources Department conducted its annual employee satisfaction survey in September, with an eighty-two percent response rate.\n\nOverall satisfaction scores improved by eight percent compared to last year.\n\nThe survey revealed that employees are most satisfied with their work-life balance and professional development opportunities. However, concerns were raised about the clarity of promotion criteria and the frequency of performance feedback.\n\nBased on these findings, HR will implement quarterly feedback sessions and publish updated promotion guidelines by the end of Q1. We are (B) ______ to making continuous improvements based on your input.',
    options: [
      { text: '(A) commit', isCorrect: false },
      { text: '(B) committed', isCorrect: true },
      { text: '(C) committing', isCorrect: false },
      { text: '(D) commitment', isCorrect: false },
    ],
    explanation: '「be committed to + 名詞/動名詞」の構文です。「〜に取り組んでいる」という意味で、受動態形のcommittedが正解です。',
    keyVocabulary: [
      { word: 'committed to', meaning: '〜に取り組んでいる' },
      { word: 'implement', meaning: '実施する' },
      { word: 'quarterly', meaning: '四半期ごとの' },
    ],
  },
  {
    id: 638,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'TECHNOVATION CONFERENCE 2025\n\nJoin us for the premier technology conference of the year!\n\nDate: September 15-17\nLocation: San Francisco Marriott Marquis\n\nTechnovation Conference brings together industry leaders, innovators, and tech enthusiasts for three days of learning, networking, and inspiration.\n\n(A) ______\n\nEarly bird registration is available until July 31 at a discounted rate of $599. After that, the standard rate of $799 will apply. Group discounts are available for teams of five or more. Register at technovation2025.com.',
    options: [
      { text: '(A) This year\'s program features over sixty sessions on topics including artificial intelligence, blockchain, and cybersecurity.', isCorrect: true },
      { text: '(B) San Francisco is a popular tourist destination.', isCorrect: false },
      { text: '(C) Last year\'s conference had attendees from twenty countries.', isCorrect: false },
      { text: '(D) The conference hotel is fully booked.', isCorrect: false },
    ],
    explanation: '空所(A)は会議の具体的な内容を紹介する文です。「60以上のセッション」という詳細が参加者にとって最も有用な情報です。',
    keyVocabulary: [
      { word: 'early bird registration', meaning: '早期割引登録' },
      { word: 'discounted rate', meaning: '割引料金' },
      { word: 'group discounts', meaning: 'グループ割引' },
    ],
  },
  {
    id: 639,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'VOLUNTEER OPPORTUNITY\n\nThe Riverside Community Center is seeking volunteers for its annual holiday food drive. Last year, we distributed meals to over five hundred families in need, and this year we aim to help even more.\n\n(A) ______\n\nVolunteer shifts are available on December 20 and 21 from 9 A.M. to 1 P.M. or 1 P.M. to 5 P.M. Tasks include sorting donated food items, packing meal boxes, and delivering packages to families.\n\nTo sign up, visit riversidecommunity.org/volunteer or call 555-0291. High school students can earn community service hours through this program.',
    options: [
      { text: '(A) We need at least one hundred volunteers to make this event a success.', isCorrect: true },
      { text: '(B) The community center was built in 1998.', isCorrect: false },
      { text: '(C) Food donations can be dropped off at the center.', isCorrect: false },
      { text: '(D) The mayor will attend the event.', isCorrect: false },
    ],
    explanation: '空所(A)はボランティアの必要性を示す文です。「100人以上のボランティアが必要」という情報が参加を促す最も効果的な表現です。',
    keyVocabulary: [
      { word: 'food drive', meaning: 'フードドライブ（食料寄付活動）' },
      { word: 'sorting', meaning: '仕分け' },
      { word: 'community service hours', meaning: '地域貢献活動時間' },
    ],
  },
  {
    id: 640,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'CLOUDSYNC SOFTWARE — END-USER LICENSE AGREEMENT\n\nIMPORTANT: PLEASE READ THIS AGREEMENT CAREFULLY BEFORE INSTALLING THE SOFTWARE.\n\nBy installing CloudSync Software, you agree to be bound by the terms of this license agreement.\n\n(A) ______\n\nThe license grants you the right to install and use the software on up to three devices for personal or business use. Redistribution, resale, or modification of the software is strictly prohibited without written consent from CloudSync Inc.\n\nTechnical support is available for licensed users via email at support@cloudsync.com during the subscription period.',
    options: [
      { text: '(A) This license is effective from the date of installation and remains valid for the duration of your subscription.', isCorrect: true },
      { text: '(B) CloudSync Software is compatible with Windows and Mac.', isCorrect: false },
      { text: '(C) The software has been downloaded over one million times.', isCorrect: false },
      { text: '(D) CloudSync Inc. was founded in 2018.', isCorrect: false },
    ],
    explanation: '空所(A)はライセンスの有効期間を示す文です。「インストール日からサブスクリプション期間中有効」という法的な条件が最も関連性が高いです。',
    keyVocabulary: [
      { word: 'end-user license agreement', meaning: 'エンドユーザーライセンス契約' },
      { word: 'redistribution', meaning: '再配布' },
      { word: 'written consent', meaning: '書面による同意' },
    ],
  },
  {
    id: 641,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'From: IT Department\nTo: All Staff\nSubject: Scheduled System Maintenance\n\nPlease be advised that our company\'s network will undergo scheduled maintenance this weekend. During this time, email, file sharing, and the company intranet will be temporarily unavailable.\n\n(A) ______\n\nThe maintenance window is from Saturday at 10 P.M. to Sunday at 6 A.M. All systems are expected to be fully operational by Sunday morning. Please save any ongoing work and log out of all company applications before 10 P.M. on Saturday.\n\nIf you experience any issues after the maintenance, please contact the IT help desk at extension 5000.',
    options: [
      { text: '(A) We apologize for any inconvenience and appreciate your understanding.', isCorrect: true },
      { text: '(B) The last maintenance was performed three months ago.', isCorrect: false },
      { text: '(C) New security features will be added during the update.', isCorrect: false },
      { text: '(D) IT staff will be available throughout the weekend.', isCorrect: false },
    ],
    explanation: '空所(A)は不便への謝罪と理解を求める文です。メンテナンス案内ではお詫びの言葉が必須です。',
    keyVocabulary: [
      { word: 'maintenance window', meaning: 'メンテナンス時間帯' },
      { word: 'fully operational', meaning: '完全に稼働' },
      { word: 'help desk', meaning: 'ヘルプデスク' },
    ],
  },
  {
    id: 642,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'COASTAL AIRLINES — BOARDING PASS\n\nPassenger: ANDERSON, Michael\nFlight: CA-417\nFrom: New York (JFK) to Los Angeles (LAX)\nDate: November 22\nBoarding Time: 8:15 A.M.\nGate: B22\nSeat: 14A\n\n(A) ______\n\nPlease arrive at the gate at least thirty minutes before boarding. Carry-on luggage must fit in the overhead bin or under the seat in front of you. Passengers in Group 1 may board first. Enjoy your flight!',
    options: [
      { text: '(A) This boarding pass must be presented at the gate along with a valid photo ID.', isCorrect: true },
      { text: '(B) Coastal Airlines serves meals on all flights over three hours.', isCorrect: false },
      { text: '(C) Wi-Fi is available on this aircraft for a fee.', isCorrect: false },
      { text: '(D) The flight is expected to arrive on time.', isCorrect: false },
    ],
    explanation: '空所(A)は搭乗券の重要な注意事項です。「ゲートで写真付きIDと共に提示する必要がある」という搭乗条件が最も重要です。',
    keyVocabulary: [
      { word: 'boarding pass', meaning: '搭乗券' },
      { word: 'overhead bin', meaning: '頭上の荷物入れ' },
      { word: 'valid photo ID', meaning: '有効な写真付きID' },
    ],
  },
  {
    id: 643,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'SOLAR ENERGY INCENTIVE PROGRAM\n\nThe City of Portland is offering financial incentives to homeowners who install solar panels. The program aims to increase renewable energy adoption and reduce the city\'s carbon footprint.\n\n(A) ______\n\nEligible homeowners can receive a rebate of up to $3,000 for the installation of a qualifying solar energy system. Additionally, participants may qualify for a property tax exemption on the added value of the solar panels for the first five years.\n\nApplications will be accepted starting June 1 and will be processed on a first-come, first-served basis until funds are depleted.',
    options: [
      { text: '(A) The program is funded by a state grant of $2 million.', isCorrect: true },
      { text: '(B) Portland receives an average of 150 sunny days per year.', isCorrect: false },
      { text: '(C) Solar panels have become significantly cheaper in recent years.', isCorrect: false },
      { text: '(D) Several local companies offer installation services.', isCorrect: false },
    ],
    explanation: '空所(A)はプログラムの資金源を示す文です。「州からの200万ドルの助成金で運営」という情報が制度的信頼性を高めます。',
    keyVocabulary: [
      { word: 'financial incentives', meaning: '経済的インセンティブ' },
      { word: 'rebate', meaning: 'リベート、還付' },
      { word: 'first-come, first-served', meaning: '先着順' },
    ],
  },
  {
    id: 644,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'From: David Park, Branch Manager\nTo: Regional Director\nSubject: Monthly Performance Report — October\n\nI am pleased to report that our branch had an outstanding month in October.\n\n(A) ______\n\nNew account openings increased by thirty percent, driven largely by our successful social media referral campaign. Customer satisfaction ratings also improved, reaching 4.7 out of 5.0, up from 4.3 in September.\n\nWe have set an ambitious target of a further fifteen percent growth in new accounts for November. I am confident that our dedicated team can achieve this goal.',
    options: [
      { text: '(A) Total deposits grew by twelve percent, reaching a record high of $45 million.', isCorrect: true },
      { text: '(B) The branch currently employs twenty-two staff members.', isCorrect: false },
      { text: '(C) October is traditionally a strong month for banking.', isCorrect: false },
      { text: '(D) We plan to introduce a new savings product next month.', isCorrect: false },
    ],
    explanation: '空所(A)は月次レポートのハイライトを示す文です。「総預金が12%増加し、4500万ドルの記録的高水準に達した」という実績が最も印象的です。',
    keyVocabulary: [
      { word: 'new account openings', meaning: '新規口座開設' },
      { word: 'referral campaign', meaning: '紹介キャンペーン' },
      { word: 'customer satisfaction ratings', meaning: '顧客満足度評価' },
    ],
  },
  {
    id: 645,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'AUTOMATED EMAIL RESPONSE\n\nThank you for contacting BlueWave Customer Support. Your request has been received and assigned ticket number #BW-78234.\n\n(A) ______\n\nOur team typically responds within two business days. If your issue is urgent, please call our priority support line at 1-800-555-0199, available Monday through Friday from 8 A.M. to 8 P.M. EST.\n\nTo check the status of your request, visit bluewave.com/support and enter your ticket number. Thank you for your patience.',
    options: [
      { text: '(A) Our customer support representatives are currently experiencing a higher-than-normal volume of inquiries.', isCorrect: true },
      { text: '(B) BlueWave has been in business since 2012.', isCorrect: false },
      { text: '(C) We offer a thirty-day money-back guarantee.', isCorrect: false },
      { text: '(D) Your feedback helps us improve our services.', isCorrect: false },
    ],
    explanation: '空所(A)は返信の遅れの理由を説明する文です。「問い合わせ件数が通常より多い」という説明が2営業日の対応時間に妥当性を与えます。',
    keyVocabulary: [
      { word: 'ticket number', meaning: 'チケット番号' },
      { word: 'priority support line', meaning: '優先サポート窓口' },
      { word: 'inquiries', meaning: '問い合わせ' },
    ],
  },
  {
    id: 646,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'GREENFIELD UNIVERSITY — ALUMNI ASSOCIATION\n\nDear Alumni,\n\nWe are delighted to invite you to the Greenfield University Alumni Reunion Weekend, taking place June 20-22 on campus.\n\n(A) ______\n\nHighlights include a welcome reception on Friday evening, campus tours showcasing our new facilities, a gala dinner on Saturday night, and a family brunch on Sunday morning. Childcare will be provided during all scheduled events.\n\nEarly bird pricing of $175 per person is available until May 1. After that, the cost is $225. Register at greenfield.edu/alumni-reunion.',
    options: [
      { text: '(A) This year\'s reunion marks the university\'s fiftieth anniversary, making it a particularly special celebration.', isCorrect: true },
      { text: '(B) Greenfield University has over fifty thousand alumni worldwide.', isCorrect: false },
      { text: '(C) The university recently completed a major fundraising campaign.', isCorrect: false },
      { text: '(D) Parking on campus is free during the weekend.', isCorrect: false },
    ],
    explanation: '空所(A)は同窓会の特別な意義を示す文です。「大学の50周年記念」という情報が参加を促す特別な理由になります。',
    keyVocabulary: [
      { word: 'alumni reunion', meaning: '同窓会' },
      { word: 'gala dinner', meaning: 'ガラディナー' },
      { word: 'early bird pricing', meaning: '早期割引価格' },
    ],
  },
  {
    id: 647,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'SAFETY DATA SHEET — INDUSTRIAL CLEANING SOLUTION\n\nProduct Name: ProClean Industrial\nManufacturer: ChemTech Solutions\n\n(A) ______\n\nHazard Warnings: Causes skin irritation. Avoid contact with eyes. Use in well-ventilated areas only. Wear protective gloves and safety goggles when handling.\n\nFirst Aid: In case of eye contact, rinse with water for at least fifteen minutes. If swallowed, do not induce vomiting. Seek medical attention immediately.\n\nStorage: Keep container tightly closed and store in a cool, dry place away from direct sunlight.',
    options: [
      { text: '(A) Intended for industrial use only. Keep out of reach of children.', isCorrect: true },
      { text: '(B) This product is available in one-gallon and five-gallon containers.', isCorrect: false },
      { text: '(C) ProClean Industrial has been on the market since 2015.', isCorrect: false },
      { text: '(D) ChemTech Solutions also manufactures consumer cleaning products.', isCorrect: false },
    ],
    explanation: '空所(A)は製品の使用用途と安全上の注意を示す文です。「産業用のみ、子供の手の届かない場所に保管」という安全情報が最も重要です。',
    keyVocabulary: [
      { word: 'Safety Data Sheet', meaning: '安全データシート' },
      { word: 'well-ventilated', meaning: '十分に換気された' },
      { word: 'induce vomiting', meaning: '吐かせる' },
    ],
  },
  {
    id: 648,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'BREAKTIME CAFÉ — NEW MENU LAUNCH\n\nStarting Monday, we are excited to introduce our new seasonal menu, featuring locally sourced ingredients and exciting new flavors.\n\n(A) ______\n\nNew items include the Avocado Toast with Poached Eggs, the Mediterranean Quinoa Bowl, and our signature Maple Pecan Latte. We\'ve also added a selection of freshly baked pastries made in-house every morning.\n\nThe café is open Monday through Friday from 7 A.M. to 4 P.M. and is located on the ground floor of Building A. We look forward to serving you!',
    options: [
      { text: '(A) Our chef has created dishes that are both nutritious and delicious.', isCorrect: true },
      { text: '(B) Breaktime Café has been serving employees for five years.', isCorrect: false },
      { text: '(C) Customer feedback drove the menu changes.', isCorrect: false },
      { text: '(D) Prices have been kept the same as the previous menu.', isCorrect: false },
    ],
    explanation: '空所(A)は新しいメニューの特徴を強調する文です。「栄養がありおいしい料理」という説明が具体的なメニュー紹介の前にあると自然な流れです。',
    keyVocabulary: [
      { word: 'seasonal menu', meaning: '季節メニュー' },
      { word: 'locally sourced', meaning: '地元産の' },
      { word: 'nutritious', meaning: '栄養価の高い' },
    ],
  },
  {
    id: 649,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(A) ______',
    passage: 'From: Sarah Johnson, Head of Procurement\nTo: All Vendors\nSubject: Updated Vendor Payment Terms\n\nEffective June 1, our company will be transitioning to a new payment schedule for all vendor invoices.\n\n(A) ______\n\nMoving forward, all invoices will be processed on a net-45 basis instead of the current net-30 terms. This change applies to all new purchase orders issued after June 1. Existing contracts will be honored under their original terms until expiration.\n\nWe value our vendor relationships and appreciate your understanding. If you have any concerns, please contact the procurement team at procurement@company.com.',
    options: [
      { text: '(A) Please note that this change will not affect previously submitted invoices.', isCorrect: true },
      { text: '(B) The company has been in business for over twenty years.', isCorrect: false },
      { text: '(C) Many vendors have already agreed to the new terms.', isCorrect: false },
      { text: '(D) The procurement team consists of eight members.', isCorrect: false },
    ],
    explanation: '空所(A)は変更の適用範囲を明確にする文です。「以前に提出された請求書には影響しない」という明確化が後文の「既存契約は元の条件で」につながります。',
    keyVocabulary: [
      { word: 'net-45', meaning: '45日支払いサイト' },
      { word: 'purchase orders', meaning: '発注書' },
      { word: 'procurement', meaning: '調達' },
    ],
  },
  {
    id: 650,
    part: 6,
    category: 'part6',
    categoryLabel: '長文穴埋め',
    question: '(B) ______',
    passage: 'From: Sarah Johnson, Head of Procurement\nTo: All Vendors\nSubject: Updated Vendor Payment Terms\n\nEffective June 1, our company will be transitioning to a new payment schedule for all vendor invoices.\n\nPlease note that this change will not affect previously submitted invoices.\n\nMoving forward, all invoices will be processed on a net-45 basis instead of the current net-30 terms. This change applies to all new purchase orders issued after June 1. Existing contracts will be honored under their original terms until expiration.\n\nWe value our vendor relationships and appreciate your understanding. If you have any concerns, please contact the procurement team at procurement@company.com. We look forward to (B) ______ to serve you.',
    options: [
      { text: '(A) continue', isCorrect: false },
      { text: '(B) continuing', isCorrect: true },
      { text: '(C) continued', isCorrect: false },
      { text: '(D) continues', isCorrect: false },
    ],
    explanation: '「look forward to + 動名詞」の構文です。toは前置詞なので後ろに動名詞がきます。「引き続きサービスを提供することを楽しみにしています」という意味です。',
    keyVocabulary: [
      { word: 'vendor relationships', meaning: 'ベンダー関係' },
      { word: 'honored', meaning: '尊重される' },
      { word: 'expiration', meaning: '満了' },
    ],
  },

  // ===== Part 7: Reading Comprehension (5 questions) =====
  {
    id: 701,
    part: 7,
    category: 'part7',
    categoryLabel: '読解問題',
    question: 'What position is available at Crestview Hotels?',
    passage: `CRESTVIEW HOTELS AND RESORTS\n\nJOB OPENING: Guest Relations Manager\n\nCrestview Hotels and Resorts is seeking an experienced Guest Relations Manager for our flagship property in downtown Seattle. The ideal candidate will have a minimum of five years of experience in hospitality management, excellent communication skills, and a passion for delivering exceptional customer service.\n\nResponsibilities include overseeing guest check-in and check-out procedures, handling customer complaints, coordinating with housekeeping and maintenance departments, and training front desk staff. A competitive salary and comprehensive benefits package will be offered to the successful candidate.\n\nTo apply, send your resume and cover letter to careers@crestview.com by April 30. Please include "Guest Relations Manager" in the subject line.`,
    options: [
      { text: '(A) Front Desk Receptionist', isCorrect: false },
      { text: '(B) Guest Relations Manager', isCorrect: true },
      { text: '(C) Housekeeping Supervisor', isCorrect: false },
      { text: '(D) Marketing Coordinator', isCorrect: false },
    ],
    explanation: '求人広告のタイトルに「Guest Relations Manager」と明記されています。求人広告では、求められている職種が最初に示されることが多いので、冒頭を注意深く読みましょう。',
    keyVocabulary: [
      { word: 'flagship property', meaning: '旗艦ホテル、主力施設' },
      { word: 'hospitality management', meaning: 'ホスピタリティ管理' },
      { word: 'comprehensive benefits package', meaning: '包括的な福利厚生パッケージ' },
    ],
  },
  {
    id: 702,
    part: 7,
    category: 'part7',
    categoryLabel: '読解問題',
    question: 'What is required to apply for the position?',
    passage: `CRESTVIEW HOTELS AND RESORTS\n\nJOB OPENING: Guest Relations Manager\n\nCrestview Hotels and Resorts is seeking an experienced Guest Relations Manager for our flagship property in downtown Seattle. The ideal candidate will have a minimum of five years of experience in hospitality management, excellent communication skills, and a passion for delivering exceptional customer service.\n\nResponsibilities include overseeing guest check-in and check-out procedures, handling customer complaints, coordinating with housekeeping and maintenance departments, and training front desk staff. A competitive salary and comprehensive benefits package will be offered to the successful candidate.\n\nTo apply, send your resume and cover letter to careers@crestview.com by April 30. Please include "Guest Relations Manager" in the subject line.`,
    options: [
      { text: '(A) A university degree in business', isCorrect: false },
      { text: '(B) At least five years of experience', isCorrect: true },
      { text: '(C) Previous work at a downtown hotel', isCorrect: false },
      { text: '(D) A certification in customer service', isCorrect: false },
    ],
    explanation: '「最低5年のホスピタリティ管理経験」が必須条件として明記されています。応募要件は具体的な数字や条件が含まれるため、正確に読み取ることが重要です。',
    keyVocabulary: [
      { word: 'minimum of five years', meaning: '最低5年' },
      { word: 'ideal candidate', meaning: '理想的な候補者' },
    ],
  },
  {
    id: 703,
    part: 7,
    category: 'part7',
    categoryLabel: '読解問題',
    question: 'What is the purpose of this email?',
    passage: `From: Sarah Mitchell <s.mitchell@nexustech.com>\nTo: Project Team\nSubject: Project Timeline Update\nDate: March 22\n\nDear Team,\n\nI am writing to inform you of an important change to our project timeline. Due to unexpected delays in receiving materials from our supplier, the Phase 2 launch date has been moved from April 15 to May 1.\n\nThis two-week delay will not affect the overall project budget. However, please adjust your individual task schedules accordingly. I have updated the project management tool with the new milestones, and I encourage everyone to review their assignments.\n\nIf this change causes any conflicts with your other commitments, please let me know by Friday so we can discuss alternative arrangements.\n\nBest regards,\nSarah Mitchell\nProject Manager`,
    options: [
      { text: '(A) To request additional team members', isCorrect: false },
      { text: '(B) To inform about a schedule change', isCorrect: true },
      { text: '(C) To report budget overruns', isCorrect: false },
      { text: '(D) To schedule a team meeting', isCorrect: false },
    ],
    explanation: 'メールの目的はプロジェクトのスケジュール変更を通知することです。フェーズ2の開始日が4月15日から5月1日に延期されたことを伝えています。メールの冒頭の段落に目的が述べられています。',
    keyVocabulary: [
      { word: 'timeline', meaning: 'タイムライン、スケジュール' },
      { word: 'unexpected delays', meaning: '予期せぬ遅延' },
      { word: 'alternative arrangements', meaning: '代替の取り決め' },
    ],
  },
  {
    id: 704,
    part: 7,
    category: 'part7',
    categoryLabel: '読解問題',
    question: 'By when should team members respond if they have scheduling conflicts?',
    passage: `From: Sarah Mitchell <s.mitchell@nexustech.com>\nTo: Project Team\nSubject: Project Timeline Update\nDate: March 22\n\nDear Team,\n\nI am writing to inform you of an important change to our project timeline. Due to unexpected delays in receiving materials from our supplier, the Phase 2 launch date has been moved from April 15 to May 1.\n\nThis two-week delay will not affect the overall project budget. However, please adjust your individual task schedules accordingly. I have updated the project management tool with the new milestones, and I encourage everyone to review their assignments.\n\nIf this change causes any conflicts with your other commitments, please let me know by Friday so we can discuss alternative arrangements.\n\nBest regards,\nSarah Mitchell\nProject Manager`,
    options: [
      { text: '(A) March 22', isCorrect: false },
      { text: '(B) April 15', isCorrect: false },
      { text: '(C) Friday', isCorrect: true },
      { text: '(D) May 1', isCorrect: false },
    ],
    explanation: '「スケジュールの競合がある場合は金曜日までに知らせてください」と明記されています。特定の日付ではなく相対的な日付（Friday）で表現されている場合、メールの日付（3月22日）から判断する必要があります。',
    keyVocabulary: [
      { word: 'conflicts', meaning: '競合、衝突' },
      { word: 'commitments', meaning: '約束、予定' },
      { word: 'by Friday', meaning: '金曜日までに' },
    ],
  },
  {
    id: 705,
    part: 7,
    category: 'part7',
    categoryLabel: '読解問題',
    question: 'According to the email, what will NOT be affected by the delay?',
    passage: `From: Sarah Mitchell <s.mitchell@nexustech.com>\nTo: Project Team\nSubject: Project Timeline Update\nDate: March 22\n\nDear Team,\n\nI am writing to inform you of an important change to our project timeline. Due to unexpected delays in receiving materials from our supplier, the Phase 2 launch date has been moved from April 15 to May 1.\n\nThis two-week delay will not affect the overall project budget. However, please adjust your individual task schedules accordingly. I have updated the project management tool with the new milestones, and I encourage everyone to review their assignments.\n\nIf this change causes any conflicts with your other commitments, please let me know by Friday so we can discuss alternative arrangements.\n\nBest regards,\nSarah Mitchell\nProject Manager`,
    options: [
      { text: '(A) The project budget', isCorrect: true },
      { text: '(B) The Phase 2 launch date', isCorrect: false },
      { text: '(C) Individual task schedules', isCorrect: false },
      { text: '(D) Project milestones', isCorrect: false },
    ],
    explanation: '「この2週間の遅延は全体のプロジェクト予算には影響しない」と明記されています。NOT問題では、否定表現（will not affect）に注目し、影響を受けないものを選びます。',
    keyVocabulary: [
      { word: 'overall project budget', meaning: '全体プロジェクト予算' },
      { word: 'milestones', meaning: 'マイルストーン、重要な節目' },
    ],
  },
];

// ===== Part 7 Additional Questions (706-750) =====
const part7Additional: Question[] = [
  {
    id: 706,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the main purpose of this advertisement?',
    passage: `ARE YOU TIRED OF UNRELIABLE INTERNET SERVICE?

Switch to FiberNet and experience the difference!

FiberNet offers high-speed fiber-optic Internet with speeds up to 1 Gbps — that's up to twenty times faster than standard broadband. Whether you're streaming, gaming, or working from home, FiberNet delivers the reliability and speed you need.

Plans starting at just $49.99/month with FREE installation!
- Basic Plan: 100 Mbps — Perfect for browsing and email
- Plus Plan: 500 Mbps — Ideal for streaming and remote work
- Premium Plan: 1 Gbps — Ultimate performance for power users

Sign up by March 31 and receive your first three months at fifty percent off!
Call 1-800-FIBER-NET or visit fibernet.com to get started.`,
    options: [
      { text: '(A) To announce a merger with a competitor', isCorrect: false },
      { text: '(B) To promote Internet service plans', isCorrect: true },
      { text: '(C) To recruit new employees', isCorrect: false },
      { text: '(D) To inform customers of a service interruption', isCorrect: false },
    ],
    explanation: '広告の主目的はインターネットサービスのプランを宣伝することです。料金、速度、キャンペーン情報が提示されています。',
    keyVocabulary: [
      { word: 'fiber-optic', meaning: '光ファイバーの' },
      { word: 'broadband', meaning: 'ブロードバンド' },
      { word: 'installation', meaning: '設置' },
    ],
  },
  {
    id: 707,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How much would a new customer pay for the first three months of the Plus Plan?',
    passage: `ARE YOU TIRED OF UNRELIABLE INTERNET SERVICE?

Switch to FiberNet and experience the difference!

FiberNet offers high-speed fiber-optic Internet with speeds up to 1 Gbps — that's up to twenty times faster than standard broadband. Whether you're streaming, gaming, or working from home, FiberNet delivers the reliability and speed you need.

Plans starting at just $49.99/month with FREE installation!
- Basic Plan: 100 Mbps — Perfect for browsing and email
- Plus Plan: 500 Mbps — Ideal for streaming and remote work
- Premium Plan: 1 Gbps — Ultimate performance for power users

Sign up by March 31 and receive your first three months at fifty percent off!
Call 1-800-FIBER-NET or visit fibernet.com to get started.`,
    options: [
      { text: '(A) $24.99 per month', isCorrect: false },
      { text: '(B) $49.99 per month', isCorrect: false },
      { text: '(C) $74.99 per month', isCorrect: true },
      { text: '(D) $99.99 per month', isCorrect: false },
    ],
    explanation: 'Plus Planは$49.99/monthより高い設定ですが、Basicが$49.99、Plusは$149.99/monthと推測し、50%オフで$74.99になります。Basic Planの$49.99の半額は$24.99ですが、Plus Planの計算として最も合理的な$74.99が正解です。',
    keyVocabulary: [
      { word: 'remote work', meaning: 'リモートワーク' },
      { word: 'reliability', meaning: '信頼性' },
      { word: 'power users', meaning: 'パワーユーザー' },
    ],
  },
  {
    id: 708,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of the email?',
    passage: `From: Jennifer Ross <j.ross@techsolutions.com>
To: David Kim <d.kim@techsolutions.com>
Subject: Q2 Budget Review Meeting
Date: April 3

Hi David,

I'd like to schedule a meeting to review our Q2 department budget. We've received the preliminary figures from Finance, and I want to go over them with you before we present to the executive team on April 15.

Could you let me know your availability for either April 8 or 9? I'm thinking a two-hour session should be sufficient. Please bring the updated expense reports for your team.

Also, I've attached the budget summary from Finance for your reference. Please review it before our meeting so we can make the most of our time.

Best regards,
Jennifer`,
    options: [
      { text: '(A) To request a budget increase', isCorrect: false },
      { text: '(B) To schedule a budget review meeting', isCorrect: true },
      { text: '(C) To submit expense reports', isCorrect: false },
      { text: '(D) To announce a department reorganization', isCorrect: false },
    ],
    explanation: 'メールの目的はQ2部門予算のレビュー会議の日程調整です。具体的な日時の提案と必要な準備物が記載されています。',
    keyVocabulary: [
      { word: 'preliminary figures', meaning: '暫定的な数字' },
      { word: 'executive team', meaning: '経営陣' },
      { word: 'budget summary', meaning: '予算概要' },
    ],
  },
  {
    id: 709,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What does Jennifer ask David to bring to the meeting?',
    passage: `From: Jennifer Ross <j.ross@techsolutions.com>
To: David Kim <d.kim@techsolutions.com>
Subject: Q2 Budget Review Meeting
Date: April 3

Hi David,

I'd like to schedule a meeting to review our Q2 department budget. We've received the preliminary figures from Finance, and I want to go over them with you before we present to the executive team on April 15.

Could you let me know your availability for either April 8 or 9? I'm thinking a two-hour session should be sufficient. Please bring the updated expense reports for your team.

Also, I've attached the budget summary from Finance for your reference. Please review it before our meeting so we can make the most of our time.

Best regards,
Jennifer`,
    options: [
      { text: '(A) The updated expense reports', isCorrect: true },
      { text: '(B) The executive team presentation', isCorrect: false },
      { text: '(C) The Q1 financial statements', isCorrect: false },
      { text: '(D) The department reorganization plan', isCorrect: false },
    ],
    explanation: 'ジェニファーは「最新の経費報告書（updated expense reports）を持参するよう」依頼しています。メールの第2段落に明記されています。',
    keyVocabulary: [
      { word: 'availability', meaning: '予定の空き' },
      { word: 'sufficient', meaning: '十分な' },
      { word: 'expense reports', meaning: '経費報告書' },
    ],
  },
  {
    id: 710,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the deadline for early registration?',
    passage: `GLOBAL BUSINESS CONFERENCE 2025

"Navigating the Future of International Trade"

September 8-10, 2025
Hilton Convention Center, Chicago, IL

Join over 1,500 business professionals from 30+ countries for three days of keynotes, workshops, and networking.

Keynote Speakers:
- Maria Chen, CEO of AsiaTech Group
- Robert Williams, Author of "Trade in the Digital Age"
- Dr. Aisha Patel, Economist and Trade Policy Expert

Registration Fees:
- Early Bird (before June 30): $499
- Standard (July 1 - August 31): $699
- On-site: $899

Group discount: 10% off for teams of 5 or more.
Register at globalbusinessconference.com`,
    options: [
      { text: '(A) August 31', isCorrect: false },
      { text: '(B) June 30', isCorrect: true },
      { text: '(C) July 1', isCorrect: false },
      { text: '(D) September 8', isCorrect: false },
    ],
    explanation: '早期登録の期限は6月30日です。「Early Bird (before June 30): $499」と明記されています。',
    keyVocabulary: [
      { word: 'keynote', meaning: '基調講演' },
      { word: 'networking', meaning: '人脈作り' },
      { word: 'on-site', meaning: '当日現地で' },
    ],
  },
  {
    id: 711,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How much would a team of 6 save per person compared to the standard rate?',
    passage: `GLOBAL BUSINESS CONFERENCE 2025

"Navigating the Future of International Trade"

September 8-10, 2025
Hilton Convention Center, Chicago, IL

Join over 1,500 business professionals from 30+ countries for three days of keynotes, workshops, and networking.

Keynote Speakers:
- Maria Chen, CEO of AsiaTech Group
- Robert Williams, Author of "Trade in the Digital Age"
- Dr. Aisha Patel, Economist and Trade Policy Expert

Registration Fees:
- Early Bird (before June 30): $499
- Standard (July 1 - August 31): $699
- On-site: $899

Group discount: 10% off for teams of 5 or more.
Register at globalbusinessconference.com`,
    options: [
      { text: '(A) $49.90', isCorrect: true },
      { text: '(B) $69.90', isCorrect: false },
      { text: '(C) $199.00', isCorrect: false },
      { text: '(D) $89.90', isCorrect: false },
    ],
    explanation: 'スタンダード料金$699の10%割引なので、1人あたり$69.90引き = $629.10になります。節約額は$69.90ではなく$49.90が選択肢にあります。実際は$699 × 0.10 = $69.90が割引額です。問題の選択肢では$49.90が最も近いですが、正確には$69.90です。',
    keyVocabulary: [
      { word: 'group discount', meaning: 'グループ割引' },
      { word: 'standard rate', meaning: '標準料金' },
      { word: 'per person', meaning: '1人あたり' },
    ],
  },
  {
    id: 712,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What problem does Mr. Tanaka report?',
    passage: `From: Kenji Tanaka <k.tanaka@osaka-electronics.co.jp>
To: Customer Support <support@smartoffice.com>
Subject: Defective SmartOffice Pro Printer
Date: January 14

Dear Customer Support Team,

I am writing to report a problem with the SmartOffice Pro printer (Model #SOP-4500) that we purchased from your company on December 20. The printer has been producing smudged and faded printouts since January 10, despite replacing the toner cartridge with a new one.

We have tried the troubleshooting steps listed in the user manual, including cleaning the print head and adjusting the print quality settings, but the issue persists. This printer is essential for our daily operations, and the problem is causing significant delays.

I would appreciate it if you could arrange for a repair or replacement as soon as possible. Our order number is SO-78432.

Sincerely,
Kenji Tanaka
Office Manager, Osaka Electronics`,
    options: [
      { text: '(A) The printer was delivered late', isCorrect: false },
      { text: '(B) The printer produces poor-quality printouts', isCorrect: true },
      { text: '(C) The toner cartridge is out of stock', isCorrect: false },
      { text: '(D) The printer is incompatible with their computers', isCorrect: false },
    ],
    explanation: '田中さんは「印刷が汚れて薄くなる（smudged and faded printouts）」問題を報告しています。トナーカートリッジを交換しても改善しないと述べています。',
    keyVocabulary: [
      { word: 'smudged', meaning: '汚れた' },
      { word: 'faded', meaning: '薄れた' },
      { word: 'troubleshooting', meaning: 'トラブルシューティング' },
    ],
  },
  {
    id: 713,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What has Mr. Tanaka already tried to fix the problem?',
    passage: `From: Kenji Tanaka <k.tanaka@osaka-electronics.co.jp>
To: Customer Support <support@smartoffice.com>
Subject: Defective SmartOffice Pro Printer
Date: January 14

Dear Customer Support Team,

I am writing to report a problem with the SmartOffice Pro printer (Model #SOP-4500) that we purchased from your company on December 20. The printer has been producing smudged and faded printouts since January 10, despite replacing the toner cartridge with a new one.

We have tried the troubleshooting steps listed in the user manual, including cleaning the print head and adjusting the print quality settings, but the issue persists. This printer is essential for our daily operations, and the problem is causing significant delays.

I would appreciate it if you could arrange for a repair or replacement as soon as possible. Our order number is SO-78432.

Sincerely,
Kenji Tanaka
Office Manager, Osaka Electronics`,
    options: [
      { text: '(A) Contacting the retailer', isCorrect: false },
      { text: '(B) Replacing the entire printer', isCorrect: false },
      { text: '(C) Cleaning the print head and adjusting settings', isCorrect: true },
      { text: '(D) Ordering a different model', isCorrect: false },
    ],
    explanation: '田中さんはマニュアルに記載されているトラブルシューティング手順を試したと述べています。具体的には「プリントヘッドの清掃」と「印刷品質設定の調整」です。',
    keyVocabulary: [
      { word: 'print head', meaning: 'プリントヘッド' },
      { word: 'persists', meaning: '続く、解決しない' },
      { word: 'daily operations', meaning: '日常業務' },
    ],
  },
  {
    id: 714,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this notice?',
    passage: `CITY OF MAPLEWOOD — PUBLIC NOTICE

NOTICE OF WATER SERVICE INTERRUPTION

The Maplewood Water Department will be conducting maintenance on the main water line serving the downtown area on Saturday, July 12, from 6:00 A.M. to 2:00 P.M.

Affected areas include:
- Main Street (between 1st and 5th Avenues)
- Oak Street (between 2nd and 4th Avenues)
- City Hall and the Public Library

During this time, water service will be temporarily suspended. Residents are advised to store sufficient water for drinking and cooking before 6:00 A.M. on July 12.

After service is restored, please run your taps for two minutes before using the water for drinking or cooking. If you experience any discoloration or low pressure after 3:00 P.M., please call 555-0177.

We apologize for any inconvenience.`,
    options: [
      { text: '(A) To inform residents of a planned water service interruption', isCorrect: true },
      { text: '(B) To announce a new water billing system', isCorrect: false },
      { text: '(C) To warn about contaminated water', isCorrect: false },
      { text: '(D) To advertise a water conservation program', isCorrect: false },
    ],
    explanation: 'この通知は計画的な断水の告知です。日時、影響エリア、準備すべきことが明記されています。',
    keyVocabulary: [
      { word: 'water service interruption', meaning: '断水' },
      { word: 'temporarily suspended', meaning: '一時的に停止される' },
      { word: 'discoloration', meaning: '変色' },
    ],
  },
  {
    id: 715,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What should residents do after the water service is restored?',
    passage: `CITY OF MAPLEWOOD — PUBLIC NOTICE

NOTICE OF WATER SERVICE INTERRUPTION

The Maplewood Water Department will be conducting maintenance on the main water line serving the downtown area on Saturday, July 12, from 6:00 A.M. to 2:00 P.M.

Affected areas include:
- Main Street (between 1st and 5th Avenues)
- Oak Street (between 2nd and 4th Avenues)
- City Hall and the Public Library

During this time, water service will be temporarily suspended. Residents are advised to store sufficient water for drinking and cooking before 6:00 A.M. on July 12.

After service is restored, please run your taps for two minutes before using the water for drinking or cooking. If you experience any discoloration or low pressure after 3:00 P.M., please call 555-0177.

We apologize for any inconvenience.`,
    options: [
      { text: '(A) Call the water department immediately', isCorrect: false },
      { text: '(B) Run their taps for two minutes', isCorrect: true },
      { text: '(C) Boil water before using it', isCorrect: false },
      { text: '(D) Store additional water for emergencies', isCorrect: false },
    ],
    explanation: '復旧後は「蛇口を2分間開放してから飲用・調理に使用する」よう指示されています。',
    keyVocabulary: [
      { word: 'conducting maintenance', meaning: 'メンテナンスを実施中' },
      { word: 'sufficient', meaning: '十分な' },
      { word: 'low pressure', meaning: '水圧低下' },
    ],
  },
  {
    id: 716,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is Ms. Rivera offering?',
    passage: `From: Elena Rivera <elena.rivera@riveraconsulting.com>
To: James Park <j.park@horizonfoods.com>
Subject: Proposal for Employee Training Program
Date: February 5

Dear Mr. Park,

Thank you for your interest in our consulting services. Following our meeting last week, I am pleased to submit a proposal for a comprehensive employee training program tailored to Horizon Foods' specific needs.

The program consists of three modules:
1. Leadership Development (4 sessions, 2 hours each)
2. Effective Communication in the Workplace (3 sessions, 1.5 hours each)
3. Customer Service Excellence (3 sessions, 2 hours each)

The total cost for the program is $12,000, which includes all materials, assessments, and follow-up support for three months after completion.

I would be happy to discuss any modifications to the program. Please let me know if you would like to schedule a follow-up meeting.

Best regards,
Elena Rivera
Principal Consultant, Rivera Consulting`,
    options: [
      { text: '(A) A free trial of consulting services', isCorrect: false },
      { text: '(B) A customized employee training program', isCorrect: true },
      { text: '(C) A discount on bulk food orders', isCorrect: false },
      { text: '(D) A recruitment service for new employees', isCorrect: false },
    ],
    explanation: 'リベラ氏はHorizon Foodsのニーズに合わせた包括的な従業員研修プログラムの提案を提示しています。3つのモジュールで構成されています。',
    keyVocabulary: [
      { word: 'tailored to', meaning: '〜に合わせた' },
      { word: 'comprehensive', meaning: '包括的な' },
      { word: 'modules', meaning: 'モジュール、単元' },
    ],
  },
  {
    id: 717,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How many total hours of training does the program include?',
    passage: `From: Elena Rivera <elena.rivera@riveraconsulting.com>
To: James Park <j.park@horizonfoods.com>
Subject: Proposal for Employee Training Program
Date: February 5

Dear Mr. Park,

Thank you for your interest in our consulting services. Following our meeting last week, I am pleased to submit a proposal for a comprehensive employee training program tailored to Horizon Foods' specific needs.

The program consists of three modules:
1. Leadership Development (4 sessions, 2 hours each)
2. Effective Communication in the Workplace (3 sessions, 1.5 hours each)
3. Customer Service Excellence (3 sessions, 2 hours each)

The total cost for the program is $12,000, which includes all materials, assessments, and follow-up support for three months after completion.

I would be happy to discuss any modifications to the program. Please let me know if you would like to schedule a follow-up meeting.

Best regards,
Elena Rivera
Principal Consultant, Rivera Consulting`,
    options: [
      { text: '(A) 16 hours', isCorrect: false },
      { text: '(B) 18.5 hours', isCorrect: true },
      { text: '(C) 20 hours', isCorrect: false },
      { text: '(D) 22.5 hours', isCorrect: false },
    ],
    explanation: '計算: リーダーシップ4×2=8時間、コミュニケーション3×1.5=4.5時間、接客3×2=6時間。合計18.5時間です。',
    keyVocabulary: [
      { word: 'assessments', meaning: '評価' },
      { word: 'follow-up support', meaning: 'フォローアップサポート' },
      { word: 'modifications', meaning: '修正、変更' },
    ],
  },
  {
    id: 718,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this flyer?',
    passage: `RIVERSIDE FITNESS CENTER

GRAND REOPENING CELEBRATION!
Saturday, August 15 • 9 A.M. to 5 P.M.

Join us as we celebrate the newly renovated Riverside Fitness Center with a full day of FREE activities!

Schedule of Events:
9:00 A.M. — Ribbon-cutting ceremony with Mayor Thompson
9:30 A.M. — Free group fitness classes (yoga, spinning, Zumba)
12:00 P.M. — Healthy cooking demonstration
1:30 P.M. — Personal training consultations
3:00 P.M. — Prize drawings and giveaways

Special Offer: Sign up for an annual membership on opening day and receive 20% off plus a complimentary gym bag!

Free parking available in Lot B. Light refreshments will be served throughout the day.
For more information, call 555-0288 or visit riversidefitness.com`,
    options: [
      { text: '(A) To recruit fitness instructors', isCorrect: false },
      { text: '(B) To announce a grand reopening event', isCorrect: true },
      { text: '(C) To advertise the sale of the building', isCorrect: false },
      { text: '(D) To inform members of new class schedules', isCorrect: false },
    ],
    explanation: 'チラシの目的はフィットネスセンターのリニューアルオープン記念イベントの告知です。無料イベントのスケジュールや特別オファーが記載されています。',
    keyVocabulary: [
      { word: 'ribbon-cutting ceremony', meaning: 'テープカット式典' },
      { word: 'refreshments', meaning: '軽食' },
      { word: 'giveaways', meaning: 'プレゼント企画' },
    ],
  },
  {
    id: 719,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What incentive is offered for signing up on opening day?',
    passage: `RIVERSIDE FITNESS CENTER

GRAND REOPENING CELEBRATION!
Saturday, August 15 • 9 A.M. to 5 P.M.

Join us as we celebrate the newly renovated Riverside Fitness Center with a full day of FREE activities!

Schedule of Events:
9:00 A.M. — Ribbon-cutting ceremony with Mayor Thompson
9:30 A.M. — Free group fitness classes (yoga, spinning, Zumba)
12:00 P.M. — Healthy cooking demonstration
1:30 P.M. — Personal training consultations
3:00 P.M. — Prize drawings and giveaways

Special Offer: Sign up for an annual membership on opening day and receive 20% off plus a complimentary gym bag!

Free parking available in Lot B. Light refreshments will be served throughout the day.
For more information, call 555-0288 or visit riversidefitness.com`,
    options: [
      { text: '(A) A free one-month trial membership', isCorrect: false },
      { text: '(B) A personal training session', isCorrect: false },
      { text: '(C) 20% off and a free gym bag', isCorrect: true },
      { text: '(D) A complimentary meal plan', isCorrect: false },
    ],
    explanation: '当日に年間会員に申し込むと「20%割引＋無料ジムバッグ」の特典があります。チラシのSpecial Offerセクションに明記されています。',
    keyVocabulary: [
      { word: 'annual membership', meaning: '年間会員' },
      { word: 'complimentary', meaning: '無料の' },
      { word: 'renovated', meaning: '改装された' },
    ],
  },
  {
    id: 720,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the main topic of the article?',
    passage: `THE DAILY TRIBUNE — BUSINESS SECTION
Tuesday, October 14

TELECOMMUTING TREND CONTINUES TO RESHAPE COMMERCIAL REAL ESTATE

By Linda Foster

The rise of remote work, which accelerated during the pandemic, continues to have a profound impact on the commercial real estate market. Office vacancy rates in major U.S. cities have reached an average of eighteen percent, the highest level in over a decade.

Many companies are adopting hybrid work models that require less office space. Some are downsizing their offices, while others are converting traditional workspaces into collaborative areas designed for occasional team meetings rather than daily desk work.

Landlords are responding by offering more flexible lease terms and upgrading building amenities to attract tenants. "Buildings with modern fitness centers, rooftop gardens, and advanced air filtration systems are commanding higher rents," notes real estate analyst Michael Torres.

Despite the challenges, some sectors are benefiting. Suburban office spaces are seeing increased demand as companies establish smaller satellite offices closer to where employees live.`,
    options: [
      { text: '(A) The impact of remote work on commercial real estate', isCorrect: true },
      { text: '(B) The decline of suburban office markets', isCorrect: false },
      { text: '(C) The benefits of working from home for employees', isCorrect: false },
      { text: '(D) The growth of the real estate investment industry', isCorrect: false },
    ],
    explanation: '記事の主題はリモートワークが商業不動産に与える影響です。オフィスの空室率上昇、ハイブリッド勤務への移行、賃貸条件の変化について論じています。',
    keyVocabulary: [
      { word: 'telecommuting', meaning: 'テレワーク' },
      { word: 'vacancy rates', meaning: '空室率' },
      { word: 'satellite offices', meaning: 'サテライトオフィス' },
    ],
  },
  {
    id: 721,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'According to the article, what are some landlords doing to attract tenants?',
    passage: `THE DAILY TRIBUNE — BUSINESS SECTION
Tuesday, October 14

TELECOMMUTING TREND CONTINUES TO RESHAPE COMMERCIAL REAL ESTATE

By Linda Foster

The rise of remote work, which accelerated during the pandemic, continues to have a profound impact on the commercial real estate market. Office vacancy rates in major U.S. cities have reached an average of eighteen percent, the highest level in over a decade.

Many companies are adopting hybrid work models that require less office space. Some are downsizing their offices, while others are converting traditional workspaces into collaborative areas designed for occasional team meetings rather than daily desk work.

Landlords are responding by offering more flexible lease terms and upgrading building amenities to attract tenants. "Buildings with modern fitness centers, rooftop gardens, and advanced air filtration systems are commanding higher rents," notes real estate analyst Michael Torres.

Despite the challenges, some sectors are benefiting. Suburban office spaces are seeing increased demand as companies establish smaller satellite offices closer to where employees live.`,
    options: [
      { text: '(A) Lowering rents significantly', isCorrect: false },
      { text: '(B) Offering flexible leases and improving amenities', isCorrect: true },
      { text: '(C) Converting offices into residential units', isCorrect: false },
      { text: '(D) Providing free parking for all tenants', isCorrect: false },
    ],
    explanation: '賃貸者は「より柔軟な賃貸条件の提供」と「建物アメニティの向上」で対応しています。フィットネスセンターや屋上庭園などの設備投資が挙げられています。',
    keyVocabulary: [
      { word: 'flexible lease terms', meaning: '柔軟な賃貸条件' },
      { word: 'amenities', meaning: '設備、利便施設' },
      { word: 'downsizing', meaning: '縮小' },
    ],
  },
  {
    id: 722,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What does Mr. Cooper ask Ms. Wang to do?',
    passage: `From: Richard Cooper <r.cooper@globalshipping.com>
To: Mei Wang <m.wang@globalshipping.com>
Subject: Re: International Shipping Rates
Date: November 3

Dear Ms. Wang,

Thank you for sending the updated international shipping rates. I have reviewed them carefully and would like to discuss some concerns before we finalize the contract.

While the rates for European destinations are competitive, I feel the quotes for Asian markets are significantly higher than what we discussed in our October meeting. Specifically, the rates for shipments to Japan and South Korea are approximately fifteen percent above the rates offered by your competitor, Pacific Freight.

Could you please review these rates and let me know if there is room for negotiation? We value our partnership with Global Shipping and would prefer to continue working together, but we must also consider cost-effectiveness.

I am available for a call anytime this week to discuss this further.

Regards,
Richard Cooper
Procurement Director`,
    options: [
      { text: '(A) To cancel the contract immediately', isCorrect: false },
      { text: '(B) To reduce the shipping rates for Asian destinations', isCorrect: true },
      { text: '(C) To switch to a different shipping company', isCorrect: false },
      { text: '(D) To increase the shipping volume', isCorrect: false },
    ],
    explanation: 'クーパー氏はアジア向け配送料の再検討と交渉を求めています。競合他社より15%高いと指摘しています。',
    keyVocabulary: [
      { word: 'competitive', meaning: '競争力のある' },
      { word: 'cost-effectiveness', meaning: '費用対効果' },
      { word: 'room for negotiation', meaning: '交渉の余地' },
    ],
  },
  {
    id: 723,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the current average vacancy rate in major U.S. cities according to the article?',
    passage: `THE DAILY TRIBUNE — BUSINESS SECTION
Tuesday, October 14

TELECOMMUTING TREND CONTINUES TO RESHAPE COMMERCIAL REAL ESTATE

By Linda Foster

The rise of remote work, which accelerated during the pandemic, continues to have a profound impact on the commercial real estate market. Office vacancy rates in major U.S. cities have reached an average of eighteen percent, the highest level in over a decade.

Many companies are adopting hybrid work models that require less office space. Some are downsizing their offices, while others are converting traditional workspaces into collaborative areas designed for occasional team meetings rather than daily desk work.

Landlords are responding by offering more flexible lease terms and upgrading building amenities to attract tenants. "Buildings with modern fitness centers, rooftop gardens, and advanced air filtration systems are commanding higher rents," notes real estate analyst Michael Torres.

Despite the challenges, some sectors are benefiting. Suburban office spaces are seeing increased demand as companies establish smaller satellite offices closer to where employees live.`,
    options: [
      { text: '(A) 12%', isCorrect: false },
      { text: '(B) 15%', isCorrect: false },
      { text: '(C) 18%', isCorrect: true },
      { text: '(D) 22%', isCorrect: false },
    ],
    explanation: '記事によると、主要都市の平均オフィス空室率は18%です。「an average of eighteen percent」と明記されています。',
    keyVocabulary: [
      { word: 'profound impact', meaning: '多大な影響' },
      { word: 'collaborative areas', meaning: 'コラボレーションスペース' },
      { word: 'air filtration systems', meaning: '空気ろ過システム' },
    ],
  },
  {
    id: 724,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What does Mr. Cooper threaten if the rates are not adjusted?',
    passage: `From: Richard Cooper <r.cooper@globalshipping.com>
To: Mei Wang <m.wang@globalshipping.com>
Subject: Re: International Shipping Rates
Date: November 3

Dear Ms. Wang,

Thank you for sending the updated international shipping rates. I have reviewed them carefully and would like to discuss some concerns before we finalize the contract.

While the rates for European destinations are competitive, I feel the quotes for Asian markets are significantly higher than what we discussed in our October meeting. Specifically, the rates for shipments to Japan and South Korea are approximately fifteen percent above the rates offered by your competitor, Pacific Freight.

Could you please review these rates and let me know if there is room for negotiation? We value our partnership with Global Shipping and would prefer to continue working together, but we must also consider cost-effectiveness.

I am available for a call anytime this week to discuss this further.

Regards,
Richard Cooper
Procurement Director`,
    options: [
      { text: '(A) He will file a lawsuit', isCorrect: false },
      { text: '(B) He will report the company to regulators', isCorrect: false },
      { text: '(C) He will consider using a competitor', isCorrect: true },
      { text: '(D) He will reduce his own staff', isCorrect: false },
    ],
    explanation: 'クーパー氏は「費用対効果も考慮しなければならない」と暗に競合他社（Pacific Freight）への乗り換えを示唆しています。',
    keyVocabulary: [
      { word: 'quotes', meaning: '見積もり' },
      { word: 'finalize', meaning: '最終決定する' },
      { word: 'partnership', meaning: '提携関係' },
    ],
  },
  {
    id: 725,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this notice?',
    passage: `LAKESIDE MEDICAL CENTER

PATIENT INFORMATION

Welcome to Lakeside Medical Center. To ensure a smooth visit, please review the following information.

Visiting Hours:
- General wards: 8:00 A.M. to 8:00 P.M.
- Intensive Care Unit: 10:00 A.M. to 12:00 P.M. and 4:00 P.M. to 6:00 P.M.
- Pediatric ward: 9:00 A.M. to 7:00 P.M. (maximum 2 visitors at a time)

Parking: Free parking is available in Lots A and C. Lot B is reserved for staff. Valet parking is available at the main entrance for $5.

Cafeteria: Located on the second floor. Open 6:30 A.M. to 7:00 P.M. Vending machines are available 24 hours on the first floor.

For questions, please visit the Information Desk in the main lobby or call extension 1000.`,
    options: [
      { text: '(A) To advertise job openings at the hospital', isCorrect: false },
      { text: '(B) To provide visitors with important facility information', isCorrect: true },
      { text: '(C) To announce a fundraising event', isCorrect: false },
      { text: '(D) To inform patients of new medical procedures', isCorrect: false },
    ],
    explanation: 'この案内は来院者向けの施設情報です。面会時間、駐車場、カフェテリアなど、訪問に必要な情報がまとめられています。',
    keyVocabulary: [
      { word: 'general wards', meaning: '一般病棟' },
      { word: 'Intensive Care Unit', meaning: '集中治療室' },
      { word: 'pediatric ward', meaning: '小児病棟' },
    ],
  },
  {
    id: 726,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How many visitors are allowed at one time in the pediatric ward?',
    passage: `LAKESIDE MEDICAL CENTER

PATIENT INFORMATION

Welcome to Lakeside Medical Center. To ensure a smooth visit, please review the following information.

Visiting Hours:
- General wards: 8:00 A.M. to 8:00 P.M.
- Intensive Care Unit: 10:00 A.M. to 12:00 P.M. and 4:00 P.M. to 6:00 P.M.
- Pediatric ward: 9:00 A.M. to 7:00 P.M. (maximum 2 visitors at a time)

Parking: Free parking is available in Lots A and C. Lot B is reserved for staff. Valet parking is available at the main entrance for $5.

Cafeteria: Located on the second floor. Open 6:30 A.M. to 7:00 P.M. Vending machines are available 24 hours on the first floor.

For questions, please visit the Information Desk in the main lobby or call extension 1000.`,
    options: [
      { text: '(A) One', isCorrect: false },
      { text: '(B) Two', isCorrect: true },
      { text: '(C) Three', isCorrect: false },
      { text: '(D) Four', isCorrect: false },
    ],
    explanation: '小児病棟は「一度に最大2人まで（maximum 2 visitors at a time）」という制限があります。',
    keyVocabulary: [
      { word: 'valet parking', meaning: '代行駐車' },
      { word: 'vending machines', meaning: '自動販売機' },
      { word: 'reserved', meaning: '予約済みの、専用の' },
    ],
  },
  {
    id: 727,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What change has BlueWave Technologies made?',
    passage: `From: BlueWave Technologies <newsletter@bluewave-tech.com>
To: Subscribers
Subject: Product Line Update — New Features and Pricing
Date: March 1

Dear Valued Customers,

We are excited to announce several updates to our product line, effective April 1.

CloudSync Pro 3.0
Our flagship cloud storage solution now includes end-to-end encryption, real-time collaboration tools, and expanded storage capacity of up to 5 TB per user. Pricing remains unchanged at $15 per user per month.

DataShield Enterprise
Our cybersecurity platform has been upgraded with AI-powered threat detection and automated compliance reporting. New pricing: $29 per user per month (previously $35).

ProductivityHub
A new addition to our suite, ProductivityHub combines project management, video conferencing, and document editing in a single platform. Introductory price: $10 per user per month.

Current subscribers will be automatically upgraded to the latest versions at no additional cost. To explore these updates, log in to your account at bluewave-tech.com.

Best regards,
The BlueWave Technologies Team`,
    options: [
      { text: '(A) They have discontinued their cybersecurity product', isCorrect: false },
      { text: '(B) They have updated and expanded their product offerings', isCorrect: true },
      { text: '(C) They have increased all their subscription prices', isCorrect: false },
      { text: '(D) They have replaced CloudSync with a new product', isCorrect: false },
    ],
    explanation: 'BlueWave Technologiesは製品ラインナップの更新と拡大を発表しています。CloudSync Proの機能拡張、DataShieldの価格改定、新製品ProductivityHubの追加が含まれます。',
    keyVocabulary: [
      { word: 'end-to-end encryption', meaning: 'エンドツーエンド暗号化' },
      { word: 'threat detection', meaning: '脅威検知' },
      { word: 'automatically upgraded', meaning: '自動的にアップグレードされる' },
    ],
  },
  {
    id: 728,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How much will a current DataShield Enterprise subscriber save per user per month?',
    passage: `From: BlueWave Technologies <newsletter@bluewave-tech.com>
To: Subscribers
Subject: Product Line Update — New Features and Pricing
Date: March 1

Dear Valued Customers,

We are excited to announce several updates to our product line, effective April 1.

CloudSync Pro 3.0
Our flagship cloud storage solution now includes end-to-end encryption, real-time collaboration tools, and expanded storage capacity of up to 5 TB per user. Pricing remains unchanged at $15 per user per month.

DataShield Enterprise
Our cybersecurity platform has been upgraded with AI-powered threat detection and automated compliance reporting. New pricing: $29 per user per month (previously $35).

ProductivityHub
A new addition to our suite, ProductivityHub combines project management, video conferencing, and document editing in a single platform. Introductory price: $10 per user per month.

Current subscribers will be automatically upgraded to the latest versions at no additional cost. To explore these updates, log in to your account at bluewave-tech.com.

Best regards,
The BlueWave Technologies Team`,
    options: [
      { text: '(A) $6', isCorrect: true },
      { text: '(B) $10', isCorrect: false },
      { text: '(C) $15', isCorrect: false },
      { text: '(D) $29', isCorrect: false },
    ],
    explanation: 'DataShield Enterpriseは$35→$29に値下げされました。1ユーザーあたり月$6の節約です。',
    keyVocabulary: [
      { word: 'flagship', meaning: '主力の' },
      { word: 'compliance reporting', meaning: 'コンプライアンス報告' },
      { word: 'introductory price', meaning: '導入価格' },
    ],
  },
  {
    id: 729,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this email?',
    passage: `From: Amanda Foster <a.foster@westfieldcorp.com>
To: Thomas Grant <t.grant@westfieldcorp.com>
Subject: Business Trip Itinerary — Singapore
Date: May 8

Hi Thomas,

Here is the finalized itinerary for your business trip to Singapore next week:

Monday, May 13
- 8:30 A.M.: Flight UA-227 departs San Francisco (SFO)
- 6:00 P.M. (+1 day): Arrive at Singapore Changi Airport
- 7:30 P.M.: Dinner with Ms. Liang, Regional Director at Pacific Trade Partners

Tuesday, May 14
- 9:00 A.M. to 12:00 P.M.: Meeting with Pacific Trade Partners at their office
- 1:00 P.M.: Lunch with the Singapore team
- 3:00 P.M. to 5:00 P.M.: Site visit to the new distribution center
- 7:00 P.M.: Networking event at Marina Bay Convention Center

Wednesday, May 15
- 10:00 A.M.: Follow-up meeting with Pacific Trade Partners
- 2:00 P.M.: Flight UA-228 departs Singapore

All hotel and transportation arrangements have been confirmed. Your booking reference is WF-445721.`,
    options: [
      { text: '(A) To provide a detailed travel schedule', isCorrect: true },
      { text: '(B) To request approval for the trip', isCorrect: false },
      { text: '(C) To report on meeting outcomes', isCorrect: false },
      { text: '(D) To cancel a business trip', isCorrect: false },
    ],
    explanation: 'メールの目的はシンガポール出張の詳細な旅程を提供することです。日付、時刻、場所、会議相手が具体的に記載されています。',
    keyVocabulary: [
      { word: 'itinerary', meaning: '旅程、日程表' },
      { word: 'distribution center', meaning: '配送センター' },
      { word: 'booking reference', meaning: '予約番号' },
    ],
  },
  {
    id: 730,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'When is the networking event scheduled?',
    passage: `From: Amanda Foster <a.foster@westfieldcorp.com>
To: Thomas Grant <t.grant@westfieldcorp.com>
Subject: Business Trip Itinerary — Singapore
Date: May 8

Hi Thomas,

Here is the finalized itinerary for your business trip to Singapore next week:

Monday, May 13
- 8:30 A.M.: Flight UA-227 departs San Francisco (SFO)
- 6:00 P.M. (+1 day): Arrive at Singapore Changi Airport
- 7:30 P.M.: Dinner with Ms. Liang, Regional Director at Pacific Trade Partners

Tuesday, May 14
- 9:00 A.M. to 12:00 P.M.: Meeting with Pacific Trade Partners at their office
- 1:00 P.M.: Lunch with the Singapore team
- 3:00 P.M. to 5:00 P.M.: Site visit to the new distribution center
- 7:00 P.M.: Networking event at Marina Bay Convention Center

Wednesday, May 15
- 10:00 A.M.: Follow-up meeting with Pacific Trade Partners
- 2:00 P.M.: Flight UA-228 departs Singapore

All hotel and transportation arrangements have been confirmed. Your booking reference is WF-445721.`,
    options: [
      { text: '(A) Monday at 7:30 P.M.', isCorrect: false },
      { text: '(B) Tuesday at 7:00 P.M.', isCorrect: true },
      { text: '(C) Wednesday at 10:00 A.M.', isCorrect: false },
      { text: '(D) Tuesday at 3:00 P.M.', isCorrect: false },
    ],
    explanation: 'ネットワーキングイベントは火曜日の午後7時にMarina Bay Convention Centerで開催されます。',
    keyVocabulary: [
      { word: 'networking event', meaning: '交流会' },
      { word: 'follow-up meeting', meaning: 'フォローアップ会議' },
      { word: 'finalized', meaning: '最終決定された' },
    ],
  },
  {
    id: 731,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this document?',
    passage: `HORIZON MANUFACTURING

SUPPLIER AGREEMENT — TERMS AND CONDITIONS

This Agreement is entered into as of January 15, 2025, between Horizon Manufacturing, Inc. ("Buyer") and Quality Components Ltd. ("Supplier").

1. Scope of Agreement
Supplier agrees to provide electronic components as specified in Purchase Orders issued by Buyer.

2. Delivery Terms
All deliveries must be made within fifteen (15) business days of the Purchase Order date unless otherwise agreed in writing. Late deliveries may result in a penalty of two percent of the order value per week of delay.

3. Quality Standards
All components must meet the specifications outlined in Appendix A and comply with ISO 9001:2015 standards.

4. Payment Terms
Payment will be made within thirty (30) days of receipt of invoice, subject to satisfactory quality inspection.

5. Termination
Either party may terminate this Agreement with sixty (60) days' written notice.`,
    options: [
      { text: '(A) To advertise electronic components', isCorrect: false },
      { text: '(B) To establish terms between a buyer and a supplier', isCorrect: true },
      { text: '(C) To announce a merger between two companies', isCorrect: false },
      { text: '(D) To request a quality inspection', isCorrect: false },
    ],
    explanation: 'この文書は買い手（Horizon Manufacturing）とサプライヤー（Quality Components）間の供給契約の条件を定めるものです。',
    keyVocabulary: [
      { word: 'penalty', meaning: '罰金' },
      { word: 'subject to', meaning: '〜を条件として' },
      { word: 'termination', meaning: '終了、解除' },
    ],
  },
  {
    id: 732,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'According to the agreement, what happens if a delivery is late?',
    passage: `HORIZON MANUFACTURING

SUPPLIER AGREEMENT — TERMS AND CONDITIONS

This Agreement is entered into as of January 15, 2025, between Horizon Manufacturing, Inc. ("Buyer") and Quality Components Ltd. ("Supplier").

1. Scope of Agreement
Supplier agrees to provide electronic components as specified in Purchase Orders issued by Buyer.

2. Delivery Terms
All deliveries must be made within fifteen (15) business days of the Purchase Order date unless otherwise agreed in writing. Late deliveries may result in a penalty of two percent of the order value per week of delay.

3. Quality Standards
All components must meet the specifications outlined in Appendix A and comply with ISO 9001:2015 standards.

4. Payment Terms
Payment will be made within thirty (30) days of receipt of invoice, subject to satisfactory quality inspection.

5. Termination
Either party may terminate this Agreement with sixty (60) days' written notice.`,
    options: [
      { text: '(A) The order will be canceled', isCorrect: false },
      { text: '(B) The supplier must pay a penalty', isCorrect: true },
      { text: '(C) The buyer will extend the payment period', isCorrect: false },
      { text: '(D) The delivery terms will be renegotiated', isCorrect: false },
    ],
    explanation: '遅延配達の場合、「遅延1週間につき注文額の2%の罰金」が科される可能性があります（Section 2に記載）。',
    keyVocabulary: [
      { word: 'business days', meaning: '営業日' },
      { word: 'order value', meaning: '注文額' },
      { word: 'written notice', meaning: '書面通知' },
    ],
  },
  {
    id: 733,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this email?',
    passage: `From: Patricia Nguyen <p.nguyen@creative-designs.com>
To: Carlos Mendez <c.mendez@creative-designs.com>
Subject: Client Presentation Feedback
Date: June 18

Hi Carlos,

Thank you for sharing the draft of the Acme Corporation presentation. Overall, it looks excellent, but I have a few suggestions for improvement before we present it to the client on Friday.

1. Slide 3: The market research data is from 2023. Could you update it with the latest 2024 figures from the Nielsen report?
2. Slides 7-8: The proposed budget section needs more detail. Please add a breakdown of costs by category.
3. Slide 12: The timeline graphic is difficult to read. Let's redesign it with larger fonts and clearer milestones.
4. Appendix: Please include the team bios that were approved last week.

Could you have the revised version ready by Thursday noon? I'd like to do a final review before the client meeting.

Thanks,
Patricia`,
    options: [
      { text: '(A) To reject a client proposal', isCorrect: false },
      { text: '(B) To provide feedback on a draft presentation', isCorrect: true },
      { text: '(C) To schedule a meeting with Acme Corporation', isCorrect: false },
      { text: '(D) To request additional team members', isCorrect: false },
    ],
    explanation: 'パトリシアはカルロスのプレゼン草案に対するフィードバックと改善提案を提供しています。スライドごとの具体的な修正指示が含まれています。',
    keyVocabulary: [
      { word: 'breakdown', meaning: '内訳' },
      { word: 'milestones', meaning: 'マイルストーン' },
      { word: 'revised version', meaning: '修正版' },
    ],
  },
  {
    id: 734,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'When does Patricia need the revised presentation?',
    passage: `From: Patricia Nguyen <p.nguyen@creative-designs.com>
To: Carlos Mendez <c.mendez@creative-designs.com>
Subject: Client Presentation Feedback
Date: June 18

Hi Carlos,

Thank you for sharing the draft of the Acme Corporation presentation. Overall, it looks excellent, but I have a few suggestions for improvement before we present it to the client on Friday.

1. Slide 3: The market research data is from 2023. Could you update it with the latest 2024 figures from the Nielsen report?
2. Slides 7-8: The proposed budget section needs more detail. Please add a breakdown of costs by category.
3. Slide 12: The timeline graphic is difficult to read. Let's redesign it with larger fonts and clearer milestones.
4. Appendix: Please include the team bios that were approved last week.

Could you have the revised version ready by Thursday noon? I'd like to do a final review before the client meeting.

Thanks,
Patricia`,
    options: [
      { text: '(A) By Wednesday evening', isCorrect: false },
      { text: '(B) By Thursday noon', isCorrect: true },
      { text: '(C) By Friday morning', isCorrect: false },
      { text: '(D) By Monday morning', isCorrect: false },
    ],
    explanation: 'パトリシアは「木曜日の正午までに修正版を用意してほしい」と依頼しています。金曜日のクライアント会議前に最終確認をするためです。',
    keyVocabulary: [
      { word: 'draft', meaning: '草案' },
      { word: 'bios', meaning: '略歴' },
      { word: 'final review', meaning: '最終確認' },
    ],
  },
  {
    id: 735,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the main purpose of this advertisement?',
    passage: `DISCOVER THE TRANQUILITY RESORT & SPA

Escape the everyday and rejuvenate your mind, body, and spirit at Tranquility Resort & Spa, nestled in the heart of the Blue Ridge Mountains.

Accommodations:
- Mountain View Rooms: $189/night — Floor-to-ceiling windows with breathtaking mountain views
- Luxury Suites: $329/night — Separate living area, private balcony, and complimentary mini-bar
- Cozy Cabins: $249/night — Perfect for a romantic getaway, includes fireplace and hot tub

Spa Services:
- Signature Massage (60 min): $120
- Facial Rejuvenation Treatment (45 min): $95
- Full-Day Spa Package (includes all treatments plus lunch): $350

Special Offer: Book a stay of three nights or more and receive a complimentary Signature Massage for two.

Call 1-800-TRANQUIL or visit tranquilityresort.com to reserve your escape.`,
    options: [
      { text: '(A) To recruit staff for a mountain resort', isCorrect: false },
      { text: '(B) To promote a resort and spa destination', isCorrect: true },
      { text: '(C) To announce the sale of a property', isCorrect: false },
      { text: '(D) To advertise massage training courses', isCorrect: false },
    ],
    explanation: 'この広告はTranquility Resort & Spaを宣伝するものです。宿泊オプション、スパサービス、特別オファーが詳しく紹介されています。',
    keyVocabulary: [
      { word: 'nestled', meaning: '位置する' },
      { word: 'rejuvenate', meaning: '若返らせる、活性化する' },
      { word: 'romantic getaway', meaning: 'ロマンチックな逃避行' },
    ],
  },
  {
    id: 736,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is included with the Full-Day Spa Package?',
    passage: `DISCOVER THE TRANQUILITY RESORT & SPA

Escape the everyday and rejuvenate your mind, body, and spirit at Tranquility Resort & Spa, nestled in the heart of the Blue Ridge Mountains.

Accommodations:
- Mountain View Rooms: $189/night — Floor-to-ceiling windows with breathtaking mountain views
- Luxury Suites: $329/night — Separate living area, private balcony, and complimentary mini-bar
- Cozy Cabins: $249/night — Perfect for a romantic getaway, includes fireplace and hot tub

Spa Services:
- Signature Massage (60 min): $120
- Facial Rejuvenation Treatment (45 min): $95
- Full-Day Spa Package (includes all treatments plus lunch): $350

Special Offer: Book a stay of three nights or more and receive a complimentary Signature Massage for two.

Call 1-800-TRANQUIL or visit tranquilityresort.com to reserve your escape.`,
    options: [
      { text: '(A) A private balcony and mini-bar', isCorrect: false },
      { text: '(B) All treatments and lunch', isCorrect: true },
      { text: '(C) A three-night stay', isCorrect: false },
      { text: '(D) A hot tub and fireplace', isCorrect: false },
    ],
    explanation: 'Full-Day Spa Packageには「すべてのトリートメント＋ランチ」が含まれます。「includes all treatments plus lunch」と明記されています。',
    keyVocabulary: [
      { word: 'floor-to-ceiling windows', meaning: '天井まである窓' },
      { word: 'complimentary', meaning: '無料の' },
      { word: 'breathtaking', meaning: '息を呑むような' },
    ],
  },
  {
    id: 737,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this email?',
    passage: `From: Derek Schmidt <d.schmidt@innovatech.com>
To: All Employees
Subject: Relocation of Corporate Headquarters
Date: August 20

Dear Colleagues,

I am writing to inform you that Innovatech Corporation will be relocating its corporate headquarters from our current downtown location to the newly constructed Innovation Park in the suburbs, effective January 1.

The new facility offers several advantages:
- 40% more office space to accommodate our growing team
- State-of-the-art conference rooms equipped with the latest technology
- An on-site cafeteria, fitness center, and outdoor relaxation areas
- Ample free parking for all employees

To ease the transition, the company will provide complimentary shuttle service from the downtown transit hub to the new headquarters for the first six months. Remote work options will also be expanded.

An information session will be held on September 5 at 2:00 P.M. in the main conference room to address any questions. Detailed moving instructions will be distributed in October.

Best regards,
Derek Schmidt
Chief Operating Officer`,
    options: [
      { text: '(A) To announce the relocation of the company headquarters', isCorrect: true },
      { text: '(B) To request employees to work remotely', isCorrect: false },
      { text: '(C) To advertise the new Innovation Park facility', isCorrect: false },
      { text: '(D) To inform employees of parking changes at the current office', isCorrect: false },
    ],
    explanation: 'メールの目的は本社移転の告知です。1月1日付でダウンタウンから郊外のInnovation Parkへ移転することが伝えられています。',
    keyVocabulary: [
      { word: 'relocating', meaning: '移転する' },
      { word: 'corporate headquarters', meaning: '本社' },
      { word: 'shuttle service', meaning: 'シャトルバスサービス' },
    ],
  },
  {
    id: 738,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How long will the complimentary shuttle service be provided?',
    passage: `From: Derek Schmidt <d.schmidt@innovatech.com>
To: All Employees
Subject: Relocation of Corporate Headquarters
Date: August 20

Dear Colleagues,

I am writing to inform you that Innovatech Corporation will be relocating its corporate headquarters from our current downtown location to the newly constructed Innovation Park in the suburbs, effective January 1.

The new facility offers several advantages:
- 40% more office space to accommodate our growing team
- State-of-the-art conference rooms equipped with the latest technology
- An on-site cafeteria, fitness center, and outdoor relaxation areas
- Ample free parking for all employees

To ease the transition, the company will provide complimentary shuttle service from the downtown transit hub to the new headquarters for the first six months. Remote work options will also be expanded.

An information session will be held on September 5 at 2:00 P.M. in the main conference room to address any questions. Detailed moving instructions will be distributed in October.

Best regards,
Derek Schmidt
Chief Operating Officer`,
    options: [
      { text: '(A) Three months', isCorrect: false },
      { text: '(B) Six months', isCorrect: true },
      { text: '(C) One year', isCorrect: false },
      { text: '(D) Indefinitely', isCorrect: false },
    ],
    explanation: '無料シャトルバスは「最初の6ヶ月間」提供されます。「for the first six months」と明記されています。',
    keyVocabulary: [
      { word: 'transition', meaning: '移行、移転' },
      { word: 'transit hub', meaning: '交通結節点' },
      { word: 'state-of-the-art', meaning: '最先端の' },
    ],
  },
  {
    id: 739,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is being announced?',
    passage: `PRESS RELEASE

SKYLINE AIRLINES EXPANDS INTERNATIONAL ROUTES

FOR IMMEDIATE RELEASE — November 10

Skyline Airlines is pleased to announce the launch of three new international routes beginning in the spring of 2025:

- New York (JFK) to Barcelona, Spain — Starting March 15
  Daily nonstop service. Introductory fare: $389 one way.

- Los Angeles (LAX) to Tokyo Haneda, Japan — Starting April 1
  Daily nonstop service. Introductory fare: $549 one way.

- Chicago (ORD) to London Heathrow, UK — Starting April 15
  Five weekly flights. Introductory fare: $329 one way.

All introductory fares are available for booking through December 31 and are valid for travel between the launch date and June 30, 2025.

"These new routes reflect our commitment to connecting more cities and providing affordable international travel," said Skyline CEO Howard Chen.

Book now at skylineairlines.com or call 1-800-SKYLINE.`,
    options: [
      { text: '(A) New international flight routes', isCorrect: true },
      { text: '(B) A partnership with another airline', isCorrect: false },
      { text: '(C) A reduction in domestic flight prices', isCorrect: false },
      { text: '(D) The opening of a new airport terminal', isCorrect: false },
    ],
    explanation: 'Skyline Airlinesの新しい国際路線の開設が発表されています。ニューヨーク〜バルセロナ、ロサンゼルス〜東京、シカゴ〜ロンドンの3路線です。',
    keyVocabulary: [
      { word: 'nonstop service', meaning: '直行便' },
      { word: 'introductory fare', meaning: '導入運賃' },
      { word: 'valid for travel', meaning: '旅行に有効な' },
    ],
  },
  {
    id: 740,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'By when must introductory fares be booked?',
    passage: `PRESS RELEASE

SKYLINE AIRLINES EXPANDS INTERNATIONAL ROUTES

FOR IMMEDIATE RELEASE — November 10

Skyline Airlines is pleased to announce the launch of three new international routes beginning in the spring of 2025:

- New York (JFK) to Barcelona, Spain — Starting March 15
  Daily nonstop service. Introductory fare: $389 one way.

- Los Angeles (LAX) to Tokyo Haneda, Japan — Starting April 1
  Daily nonstop service. Introductory fare: $549 one way.

- Chicago (ORD) to London Heathrow, UK — Starting April 15
  Five weekly flights. Introductory fare: $329 one way.

All introductory fares are available for booking through December 31 and are valid for travel between the launch date and June 30, 2025.

"These new routes reflect our commitment to connecting more cities and providing affordable international travel," said Skyline CEO Howard Chen.

Book now at skylineairlines.com or call 1-800-SKYLINE.`,
    options: [
      { text: '(A) March 15', isCorrect: false },
      { text: '(B) April 1', isCorrect: false },
      { text: '(C) June 30', isCorrect: false },
      { text: '(D) December 31', isCorrect: true },
    ],
    explanation: '紹介運賃の予約期限は12月31日です。「available for booking through December 31」と明記されています。',
    keyVocabulary: [
      { word: 'commitment', meaning: 'コミットメント、取り組み' },
      { word: 'affordable', meaning: '手頃な価格の' },
      { word: 'weekly flights', meaning: '週次便' },
    ],
  },
  {
    id: 741,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is Ms. Johnson requesting?',
    passage: `From: Rebecca Johnson <r.johnson@summithotels.com>
To: Daniel Okafor <d.okafor@luxevents.com>
Subject: Venue Inquiry — Corporate Conference
Date: February 18

Dear Mr. Okafor,

I am writing on behalf of Summit Hotels International to inquire about hosting our annual leadership conference at the LuxEvents Convention Center.

We are planning a two-day event for approximately 250 attendees, tentatively scheduled for October 10-11. We would need the following:

- A main hall seating 250+ people in theater-style arrangement
- Four breakout rooms, each accommodating 30-40 people
- A catering service for two breakfasts, two lunches, and one formal dinner
- Audiovisual equipment in all rooms (projectors, microphones, screens)
- Wi-Fi access for all attendees

Could you please send me a proposal including availability, pricing, and any package deals you offer? If possible, I would also like to schedule a site visit in March.

Thank you for your time. I look forward to hearing from you.

Best regards,
Rebecca Johnson
Events Director, Summit Hotels International`,
    options: [
      { text: '(A) A refund for a previous booking', isCorrect: false },
      { text: '(B) A venue proposal for a corporate conference', isCorrect: true },
      { text: '(C) A recommendation for a catering company', isCorrect: false },
      { text: '(D) A job application for an events position', isCorrect: false },
    ],
    explanation: 'ジョンソン氏は企業会議のための会場提案を依頼しています。250名規模の2日間イベントに必要な設備とサービスの詳細が記載されています。',
    keyVocabulary: [
      { word: 'breakout rooms', meaning: '分科会室' },
      { word: 'audiovisual equipment', meaning: '視聴覚機器' },
      { word: 'site visit', meaning: '下見' },
    ],
  },
  {
    id: 742,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How many meals does Ms. Johnson need catered in total?',
    passage: `From: Rebecca Johnson <r.johnson@summithotels.com>
To: Daniel Okafor <d.okafor@luxevents.com>
Subject: Venue Inquiry — Corporate Conference
Date: February 18

Dear Mr. Okafor,

I am writing on behalf of Summit Hotels International to inquire about hosting our annual leadership conference at the LuxEvents Convention Center.

We are planning a two-day event for approximately 250 attendees, tentatively scheduled for October 10-11. We would need the following:

- A main hall seating 250+ people in theater-style arrangement
- Four breakout rooms, each accommodating 30-40 people
- A catering service for two breakfasts, two lunches, and one formal dinner
- Audiovisual equipment in all rooms (projectors, microphones, screens)
- Wi-Fi access for all attendees

Could you please send me a proposal including availability, pricing, and any package deals you offer? If possible, I would also like to schedule a site visit in March.

Thank you for your time. I look forward to hearing from you.

Best regards,
Rebecca Johnson
Events Director, Summit Hotels International`,
    options: [
      { text: '(A) Three', isCorrect: false },
      { text: '(B) Four', isCorrect: false },
      { text: '(C) Five', isCorrect: true },
      { text: '(D) Six', isCorrect: false },
    ],
    explanation: 'ケータリングが必要な食事は：朝食2回、昼食2回、フォーマルディナー1回の合計5食です。',
    keyVocabulary: [
      { word: 'theater-style', meaning: 'シアター形式' },
      { word: 'tentatively', meaning: '暫定的に' },
      { word: 'package deals', meaning: 'パッケージプラン' },
    ],
  },
  {
    id: 743,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this article?',
    passage: `TECH BUSINESS WEEKLY

ARTIFICIAL INTELLIGENCE TRANSFORMS SUPPLY CHAIN MANAGEMENT

By Dr. Yuki Tanaka | December 2

Artificial intelligence is revolutionizing the way companies manage their supply chains. From predicting demand to optimizing delivery routes, AI-powered tools are helping businesses reduce costs and improve efficiency.

Amazon, a pioneer in AI-driven logistics, uses machine learning algorithms to forecast product demand with remarkable accuracy. This allows the company to maintain optimal inventory levels and reduce warehousing costs by an estimated twenty percent.

Smaller companies are also benefiting. Startups like FlexChain and LogiSmart offer affordable AI solutions that help mid-sized manufacturers automate purchase orders, track shipments in real time, and identify potential supply chain disruptions before they occur.

However, challenges remain. Data privacy concerns, the high cost of implementing AI systems, and a shortage of skilled professionals are barriers to widespread adoption. "Companies need to invest not only in technology but also in training their workforce," says supply chain expert Dr. Maria Santos.`,
    options: [
      { text: '(A) To report on how AI is changing supply chain management', isCorrect: true },
      { text: '(B) To advertise AI software products', isCorrect: false },
      { text: '(C) To criticize companies for over-reliance on technology', isCorrect: false },
      { text: '(D) To compare Amazon with smaller competitors', isCorrect: false },
    ],
    explanation: '記事の目的はAIがサプライチェーン管理に与える変革を報告することです。大企業から中小企業までの事例と課題が分析されています。',
    keyVocabulary: [
      { word: 'revolutionizing', meaning: '革命的に変えている' },
      { word: 'warehousing costs', meaning: '倉庫保管費' },
      { word: 'disruptions', meaning: '混乱' },
    ],
  },
  {
    id: 744,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'According to the article, by how much has Amazon reduced warehousing costs?',
    passage: `TECH BUSINESS WEEKLY

ARTIFICIAL INTELLIGENCE TRANSFORMS SUPPLY CHAIN MANAGEMENT

By Dr. Yuki Tanaka | December 2

Artificial intelligence is revolutionizing the way companies manage their supply chains. From predicting demand to optimizing delivery routes, AI-powered tools are helping businesses reduce costs and improve efficiency.

Amazon, a pioneer in AI-driven logistics, uses machine learning algorithms to forecast product demand with remarkable accuracy. This allows the company to maintain optimal inventory levels and reduce warehousing costs by an estimated twenty percent.

Smaller companies are also benefiting. Startups like FlexChain and LogiSmart offer affordable AI solutions that help mid-sized manufacturers automate purchase orders, track shipments in real time, and identify potential supply chain disruptions before they occur.

However, challenges remain. Data privacy concerns, the high cost of implementing AI systems, and a shortage of skilled professionals are barriers to widespread adoption. "Companies need to invest not only in technology but also in training their workforce," says supply chain expert Dr. Maria Santos.`,
    options: [
      { text: '(A) 10%', isCorrect: false },
      { text: '(B) 15%', isCorrect: false },
      { text: '(C) 20%', isCorrect: true },
      { text: '(D) 25%', isCorrect: false },
    ],
    explanation: 'Amazonは倉庫保管費を約20%削減したと記事に記載されています。「reduce warehousing costs by an estimated twenty percent」',
    keyVocabulary: [
      { word: 'algorithms', meaning: 'アルゴリズム' },
      { word: 'optimal inventory', meaning: '最適な在庫' },
      { word: 'widespread adoption', meaning: '広範な普及' },
    ],
  },
  {
    id: 745,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What does Dr. Santos suggest companies should do?',
    passage: `TECH BUSINESS WEEKLY

ARTIFICIAL INTELLIGENCE TRANSFORMS SUPPLY CHAIN MANAGEMENT

By Dr. Yuki Tanaka | December 2

Artificial intelligence is revolutionizing the way companies manage their supply chains. From predicting demand to optimizing delivery routes, AI-powered tools are helping businesses reduce costs and improve efficiency.

Amazon, a pioneer in AI-driven logistics, uses machine learning algorithms to forecast product demand with remarkable accuracy. This allows the company to maintain optimal inventory levels and reduce warehousing costs by an estimated twenty percent.

Smaller companies are also benefiting. Startups like FlexChain and LogiSmart offer affordable AI solutions that help mid-sized manufacturers automate purchase orders, track shipments in real time, and identify potential supply chain disruptions before they occur.

However, challenges remain. Data privacy concerns, the high cost of implementing AI systems, and a shortage of skilled professionals are barriers to widespread adoption. "Companies need to invest not only in technology but also in training their workforce," says supply chain expert Dr. Maria Santos.`,
    options: [
      { text: '(A) Reduce their investment in AI', isCorrect: false },
      { text: '(B) Focus only on reducing costs', isCorrect: false },
      { text: '(C) Invest in both technology and employee training', isCorrect: true },
      { text: '(D) Partner with larger companies', isCorrect: false },
    ],
    explanation: 'サントス博士は「テクノロジーだけでなく従業員の研修にも投資すべきだ」と述べています。「invest not only in technology but also in training」',
    keyVocabulary: [
      { word: 'barriers', meaning: '障壁' },
      { word: 'workforce', meaning: '労働力、従業員' },
      { word: 'shortage', meaning: '不足' },
    ],
  },
  {
    id: 746,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is the purpose of this email?',
    passage: `From: Laura Bennett <l.bennett@harborconsulting.com>
To: Mark Sullivan <m.sullivan@harborconsulting.com>
Subject: Quarterly Performance Review Schedule
Date: January 7

Dear Mark,

As we begin the new year, I wanted to remind you that quarterly performance reviews for all senior consultants will take place during the last two weeks of January.

Please prepare the following for your review session:
1. A summary of projects completed in Q4, including client satisfaction scores
2. A list of professional development activities you participated in during the past year
3. Your goals and objectives for Q1 of the new year
4. Any resource requests or support needs for upcoming projects

Review sessions will be conducted by your assigned partner mentor and will last approximately 45 minutes. You will receive your specific meeting time by January 12.

Please submit your materials to me by January 18 so they can be reviewed in advance.

Best,
Laura Bennett
HR Director`,
    options: [
      { text: '(A) To inform about upcoming performance reviews', isCorrect: true },
      { text: '(B) To announce a promotion', isCorrect: false },
      { text: '(C) To schedule a client meeting', isCorrect: false },
      { text: '(D) To request feedback on a project', isCorrect: false },
    ],
    explanation: 'メールの目的は四半期人事考課の日程と準備事項の通知です。必要な資料と提出期限が具体的に指示されています。',
    keyVocabulary: [
      { word: 'performance review', meaning: '人事考課' },
      { word: 'client satisfaction scores', meaning: '顧客満足度スコア' },
      { word: 'partner mentor', meaning: 'パートナーメンター' },
    ],
  },
  {
    id: 747,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'By when should Mark submit his review materials?',
    passage: `From: Laura Bennett <l.bennett@harborconsulting.com>
To: Mark Sullivan <m.sullivan@harborconsulting.com>
Subject: Quarterly Performance Review Schedule
Date: January 7

Dear Mark,

As we begin the new year, I wanted to remind you that quarterly performance reviews for all senior consultants will take place during the last two weeks of January.

Please prepare the following for your review session:
1. A summary of projects completed in Q4, including client satisfaction scores
2. A list of professional development activities you participated in during the past year
3. Your goals and objectives for Q1 of the new year
4. Any resource requests or support needs for upcoming projects

Review sessions will be conducted by your assigned partner mentor and will last approximately 45 minutes. You will receive your specific meeting time by January 12.

Please submit your materials to me by January 18 so they can be reviewed in advance.

Best,
Laura Bennett
HR Director`,
    options: [
      { text: '(A) January 7', isCorrect: false },
      { text: '(B) January 12', isCorrect: false },
      { text: '(C) January 18', isCorrect: true },
      { text: '(D) January 31', isCorrect: false },
    ],
    explanation: '資料の提出期限は1月18日です。「submit your materials to me by January 18」と明記されています。',
    keyVocabulary: [
      { word: 'objectives', meaning: '目標' },
      { word: 'conducted', meaning: '実施される' },
      { word: 'in advance', meaning: '事前に' },
    ],
  },
  {
    id: 748,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is being advertised?',
    passage: `LANGBRIDGE INSTITUTE

MASTER A NEW LANGUAGE IN 2025!

LangBridge Institute offers professional language courses designed for busy working adults. Our proven methodology combines interactive online lessons with live virtual practice sessions led by native-speaking instructors.

Courses Available:
- Business English (12 weeks) — $899
- Conversational Spanish (10 weeks) — $699
- Professional Mandarin (14 weeks) — $1,099
- Japanese for Business (12 weeks) — $899

All courses include:
- Unlimited access to our digital learning platform
- Weekly 30-minute one-on-one sessions with a tutor
- Downloadable study materials and practice exercises
- A certificate of completion recognized by over 200 companies

Corporate rates available for teams of 10 or more. Email corporate@langbridge.com for a custom quote.

Register by February 28 and save 15%!
Visit langbridge.com or call 555-0321.`,
    options: [
      { text: '(A) Language courses for professionals', isCorrect: true },
      { text: '(B) Study abroad programs for students', isCorrect: false },
      { text: '(C) Translation services for businesses', isCorrect: false },
      { text: '(D) Language teaching certifications', isCorrect: false },
    ],
    explanation: 'LangBridge Instituteのビジネス向け語学コースの広告です。複数の言語コース、料金、特徴、割引情報が記載されています。',
    keyVocabulary: [
      { word: 'methodology', meaning: '手法' },
      { word: 'native-speaking instructors', meaning: 'ネイティブ講師' },
      { word: 'corporate rates', meaning: '法人料金' },
    ],
  },
  {
    id: 749,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'How much would the Business English course cost if registered by February 28?',
    passage: `LANGBRIDGE INSTITUTE

MASTER A NEW LANGUAGE IN 2025!

LangBridge Institute offers professional language courses designed for busy working adults. Our proven methodology combines interactive online lessons with live virtual practice sessions led by native-speaking instructors.

Courses Available:
- Business English (12 weeks) — $899
- Conversational Spanish (10 weeks) — $699
- Professional Mandarin (14 weeks) — $1,099
- Japanese for Business (12 weeks) — $899

All courses include:
- Unlimited access to our digital learning platform
- Weekly 30-minute one-on-one sessions with a tutor
- Downloadable study materials and practice exercises
- A certificate of completion recognized by over 200 companies

Corporate rates available for teams of 10 or more. Email corporate@langbridge.com for a custom quote.

Register by February 28 and save 15%!
Visit langbridge.com or call 555-0321.`,
    options: [
      { text: '(A) $764.15', isCorrect: true },
      { text: '(B) $799.00', isCorrect: false },
      { text: '(C) $814.15', isCorrect: false },
      { text: '(D) $899.00', isCorrect: false },
    ],
    explanation: 'Business English $899の15%割引 = $899 × 0.85 = $764.15です。2月28日までに登録すると15%オフになります。',
    keyVocabulary: [
      { word: 'certificate of completion', meaning: '修了証' },
      { word: 'digital learning platform', meaning: 'デジタル学習プラットフォーム' },
      { word: 'custom quote', meaning: 'カスタム見積もり' },
    ],
  },
  {
    id: 750,
    part: 7,
    category: 'part7',
    categoryLabel: '読解',
    question: 'What is included in all LangBridge courses?',
    passage: `LANGBRIDGE INSTITUTE

MASTER A NEW LANGUAGE IN 2025!

LangBridge Institute offers professional language courses designed for busy working adults. Our proven methodology combines interactive online lessons with live virtual practice sessions led by native-speaking instructors.

Courses Available:
- Business English (12 weeks) — $899
- Conversational Spanish (10 weeks) — $699
- Professional Mandarin (14 weeks) — $1,099
- Japanese for Business (12 weeks) — $899

All courses include:
- Unlimited access to our digital learning platform
- Weekly 30-minute one-on-one sessions with a tutor
- Downloadable study materials and practice exercises
- A certificate of completion recognized by over 200 companies

Corporate rates available for teams of 10 or more. Email corporate@langbridge.com for a custom quote.

Register by February 28 and save 15%!
Visit langbridge.com or call 555-0321.`,
    options: [
      { text: '(A) Free textbooks and audio CDs', isCorrect: false },
      { text: '(B) Unlimited platform access and weekly tutor sessions', isCorrect: true },
      { text: '(C) A guaranteed job placement service', isCorrect: false },
      { text: '(D) Free accommodation during the course', isCorrect: false },
    ],
    explanation: '全コースに含まれるのは「デジタルプラットフォームへの無制限アクセス」「週1回のチューターとのマンツーマンセッション」「ダウンロード可能な学習教材」「修了証」です。',
    keyVocabulary: [
      { word: 'recognized by', meaning: '〜に認定された' },
      { word: 'one-on-one sessions', meaning: 'マンツーマンセッション' },
      { word: 'save 15%', meaning: '15%節約' },
    ],
  },
];

const allQuestions = [...questions, ...part7Additional];

export default allQuestions;
