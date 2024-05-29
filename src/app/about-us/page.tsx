import { AuthorsList } from "@/components/authors-list/authors-list";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { KnowOurTeam } from "@/components/know-our-team/know-our-team";
import { MissionVision } from "@/components/mission-vision/mission-vision";

export default function Page() {
  return (
    <>
      <MissionVision />
      <KnowOurTeam />
      <AuthorsList />
      <JoinOurTeam />
    </>
  );
}
