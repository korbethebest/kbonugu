export const convertTeamNameToEnglish = (teamName: string): string => {
  const teamMap: Record<string, string> = {
    "기아": "KIA",
    "두산": "DOOSAN",
    "롯데": "LOTTE",
    "삼성": "SAMSUNG",
    "키움": "KIWOOM",
    "한화": "HANWHA",
  };

  return teamMap[teamName] || teamName;
};
