from ..models.Usermodel import UserProfile;
from django.test import TransactionTestCase;
from django.contrib.auth.models import User;

class UserProfileModelTestCase(TransactionTestCase):
    def setUp(self):
        user = User.objects.create(username='test_user')
        UserProfile.objects.create(user=user, profile_photo_name='test_photo', cover_photo_name='test_cover')

    def test_profile_photo_name(self):
        user_profile = UserProfile.objects.get(user__username='test_user')
        self.assertEqual(user_profile.profile_photo_name, 'test_photo')

    def test_cover_photo_name(self):
        user_profile = UserProfile.objects.get(user__username='test_user')
        self.assertEqual(user_profile.cover_photo_name, 'test_cover')
