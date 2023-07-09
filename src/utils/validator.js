export const validateInput = (input) => {
  if (input === "") {
    alert("내용을 입력해 주세요.");
    return false;
  }

  if (input.length < 10) {
    alert("내용은 최소 10글자 이상이어야 합니다.");
    return false;
  }

  return true;
};
