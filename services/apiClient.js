const fetchAoeDump = async () => {

  /*
    Player IDs:
    Atrioc: 518351
    Paul Mango (Day9): 2065858
    ...
  */
  const res = await fetch("https://aoe-api.worldsedgelink.com/community/leaderboard/getPersonalStat?title=age2&profile_ids=[2065858,518351]");
  const data = res.json()
  return data
};

module.exports = {
  fetchAoeDump
}