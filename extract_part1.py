import re

with open('src/data/questions.ts', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = re.split(r'(?=\{\s*id:\s*\d+)', content)

results = []

for block in blocks:
    id_match = re.search(r'id:\s*(\d+)', block)
    part_match = re.search(r'part:\s*1\b', block)
    if not id_match or not part_match:
        continue
    
    qid = int(id_match.group(1))
    if qid < 126:
        continue
    
    alt_match = re.search(r'imageAlt:\s*["\x27]([^"\x27]+)["\x27]', block)
    
    # Get audioScript which contains all options including correct answer
    script_match = re.search(r"audioScript:\s*['\"](.+?)['\"]\s*,", block, re.DOTALL)
    
    # Get correct letter
    correct_match = re.findall(r"text:\s*['\"](\([A-D]\))['\"]\s*,\s*isCorrect:\s*true", block)
    correct_letter = correct_match[0] if correct_match else "?"
    
    # Extract the correct line from audioScript
    correct_text = "N/A"
    if script_match:
        script = script_match.group(1)
        # Unescape newlines
        script = script.replace('\\n', '\n')
        for line in script.split('\n'):
            if line.strip().startswith(correct_letter):
                correct_text = line.strip()
                break
    
    alt = alt_match.group(1).strip() if alt_match else "N/A"
    
    results.append(f"Q{qid}")
    results.append(f"  scene: {alt}")
    results.append(f"  correct: {correct_text}")
    results.append("")

print("\n".join(results))
