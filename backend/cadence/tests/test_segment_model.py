from ..models.SegmentModel import Segment;
from django.test import TransactionTestCase;
from ..models.RunModel import Run;

class SegmentModelTestCase(TransactionTestCase):
    def setUp(self):
        run = Run.objects.create(avg_pace=5.0, duration=30, distance=5.0)
        Segment.objects.create(distance=5.0, duration=30, pace=6.0, run=run)

    def test_distance(self):
        segment = Segment.objects.get(pace=6.0)
        self.assertEqual(segment.distance, 5.0)
